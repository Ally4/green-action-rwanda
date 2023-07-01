import "../styles/Style.css";
import Forest from "../photos/forest.jpg";
import React, { useState, useEffect } from 'react';

function Home() {


  const [text, setText] = useState('');
  const fullText = 'What are we waiting for to save the plane';
  const delay = 100; // Delay between each character in milliseconds

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      } else {
        currentText += fullText.charAt(currentIndex);
        setText(currentText);
        currentIndex++;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <div >
        <div >
          <img src={Forest} className="forest-image" alt="forest">
          </img>
          <h2 className="auto-text">{text}</h2>
        </div>
        <h1>for</h1>
      </div>
    </>
  );
}

export default Home;