import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

function RandomQuotes() {
   const [quotes, setQuotes] = useState([])
   const [quote, setQuote] = useState({})
   const [bg, setBg]= useState('bg-primary')

   const getBgs =()=>{
       const bgcolors = ["primary", "warning", "info", "light", "muted", "secondary"]
        const bgindex = Math.floor(Math.random()*bgcolors.length)
        setBg(bgcolors[bgindex])
   }

   const getQuotes = async()=>{
    const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    const data = await res.json()
    console.log(data);
    setQuote(data.quotes[0])
    setQuotes(data)
   }

   const getRandomQuote = ()=>{
       getBgs()
       const quoteNum = Math.floor(Math.random()*100)
       setQuote(quotes.quotes[quoteNum])
       console.log(quotes);
       console.log(quotes.quotes[quoteNum]);
   }

   useEffect(() => {
     getQuotes();
   }, [])
   

  return (
    <div className={`w-100  h-100 ${'bg-'+bg} flex-column d-flex align-items-center justify-content-center`}>
      <h1>Random quote generator</h1>
      <div className="inner bg-danger w-75 d-flex flex-column items-center p-1 justify-content-between">
        <h1 className={`d-flex align-items-center ${'text-'+bg} justify-content-center w-100`}>
          <i className="fa-solid fa-quote-left"></i>
          {quote.quote}
          <i class="fa-solid fa-quote-right"></i>
        </h1>
        <p className={`text-center ${'text-'+bg}`}>{quote.author}</p>
        <div className="w-100 d-flex items-center">
          <h1 className="">
            <i className={`fa-brands fa-twitter ms-3 p-2 ${'bg-'+bg}`}></i>
            <i className={`fa-brands fa-tumblr ms-3 p-2 px-3 cursor-pointer ${'bg-'+bg}`}></i>
          </h1>
          <button 
          onClick={getRandomQuote}
          className="btn btn-primary w-50 mx-auto"
          >New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuotes;
