import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

export default function Home() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const newQuote = () => {
    axios.get('/api/quotes')
      .then(response => {
        // Get a random quote from the response array
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomQuote = response.data[randomIndex];
        setQuote(randomQuote.q);
        setAuthor(randomQuote.a);
      })
      .catch(error => {
        console.error('Error fetching the quote:', error);
        setQuote('Failed to fetch quote');
        setAuthor('');
      });
  };

  // Automatically fetch a quote when the component mounts
  useEffect(() => {
    newQuote();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 flex-col gap-4 p-4">
      <div className="text-center bg-gray-400 p-8 rounded-md shadow-md">
        <p className="text-xl font-semibold">{quote}</p>
        {author && <p className="mt-4 text-gray-700">- {author}</p>}
      </div>
      <button onClick={newQuote} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Display Another Quote
      </button>
    </div>
  );
}
