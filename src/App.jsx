import './App.scss';
import React, { useEffect, useState } from 'react'
function App() {
  const [color, setColor] = useState('');
  const [quote, setQuote] = useState([])
  console.log(color)

  const colorStyle = {
    color: color
  }

  const bgStyle = {
    backgroundColor: color
  }

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  useEffect(async () => {

    var singleColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(singleColor)

    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json();
    setQuote(data[Math.floor(Math.random() * data.length)])
    // fetch('https://zenquotes.io/api/random')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

  }, [])


  return (
    <div className="wrapper" style={bgStyle}>

      <div id="quote-box">
        <div id="text" style={colorStyle} >
          {quote.text}
        </div>
        <div id="author" style={colorStyle}>
          - <span>{quote.author}</span>
        </div>
        <div className="thirdRow">
          <a href="" id="tweet-quote" style={bgStyle}>
            <i class="fa fa-twitter" aria-hidden="true" ></i>
          </a>
          <button id="new-quote" style={bgStyle}>
            New Quote
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
