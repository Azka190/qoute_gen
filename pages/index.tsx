import Image from "next/image";
import axios from "axios";
import { error } from "console";


export default function Home() {
  const newQuote = () => {
    axios.get('https://api.quotable.io/random').then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error)
    } )
  }
  return (
   <>
   <button onClick={newQuote} className="py-2 px-4 border">Display</button>
   </>
  );
}
