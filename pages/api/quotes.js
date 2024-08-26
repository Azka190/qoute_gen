// pages/api/quote.js

export default function handler(req, res) {
    const quotes = [
      
    { q: "Technology should improve your life, not become your life.", a: "Billy Cox" },
    { q: "Technology is best when it brings people together.", a: "Matt Mullenweg" },
    { q: "The art challenges the technology, and the technology inspires the art.", a: "John Lasseter" },
    { q: "The Internet is becoming the town square for the global village of tomorrow.", a: "Bill Gates" },
    { q: "The real problem is not whether machines think but whether men do.", a: "B.F. Skinner" },
    { q: "It has become appallingly obvious that our technology has exceeded our humanity.", a: "Albert Einstein" },
    { q: "Any sufficiently advanced technology is indistinguishable from magic.", a: "Arthur C. Clarke" },
    { q: "It’s not that we use technology, we live technology.", a: "Godfrey Reggio" },
    { q: "Technology like art is a soaring exercise of the human imagination.", a: "Daniel Bell" },
    { q: "The science of today is the technology of tomorrow.", a: "Edward Teller" },
    { q: "Technological progress has merely provided us with more efficient means for going backwards.", a: "Aldous Huxley" },
    { q: "Technology is a useful servant but a dangerous master.", a: "Christian Lous Lange" },
    { q: "Technology made large populations possible; large populations now make technology indispensable.", a: "Joseph Wood Krutch" },
    { q: "New technology is not good or evil in and of itself. It's all about how people choose to use it.", a: "David Wong" },
    { q: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", a: "Sydney J. Harris" },
    { q: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.", a: "Stewart Brand" },
    { q: "It's not a faith in technology. It's faith in people.", a: "Steve Jobs" },
    { q: "The great growling engine of change - technology.", a: "Alvin Toffler" },
    { q: "Technology should improve your life, not become your life.", a: "Billy Cox" },
    { q: "The art challenges the technology, and the technology inspires the art.", a: "John Lasseter" },
    { q: "The Internet is becoming the town square for the global village of tomorrow.", a: "Bill Gates" },
    { q: "The real problem is not whether machines think but whether men do.", a: "B.F. Skinner" },
    { q: "It has become appallingly obvious that our technology has exceeded our humanity.", a: "Albert Einstein" },
    { q: "Any sufficiently advanced technology is indistinguishable from magic.", a: "Arthur C. Clarke" },
    { q: "Technology is best when it brings people together.", a: "Matt Mullenweg" },
    { q: "The art challenges the technology, and the technology inspires the art.", a: "John Lasseter" },
    { q: "The Internet is becoming the town square for the global village of tomorrow.", a: "Bill Gates" },
    { q: "The real problem is not whether machines think but whether men do.", a: "B.F. Skinner" },
    { q: "It has become appallingly obvious that our technology has exceeded our humanity.", a: "Albert Einstein" },
    { q: "Any sufficiently advanced technology is indistinguishable from magic.", a: "Arthur C. Clarke" },
    { q: "Technology is best when it brings people together.", a: "Matt Mullenweg" },
    { q: "The art challenges the technology, and the technology inspires the art.", a: "John Lasseter" },
    { q: "The Internet is becoming the town square for the global village of tomorrow.", a: "Bill Gates" },
    { q: "The real problem is not whether machines think but whether men do.", a: "B.F. Skinner" },
    { q: "It has become appallingly obvious that our technology has exceeded our humanity.", a: "Albert Einstein" },
    { q: "Any sufficiently advanced technology is indistinguishable from magic.", a: "Arthur C. Clarke" },
      { q: "Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.", a: "Stewart Brand" }
    ];
  
    res.status(200).json(quotes);
  }
  