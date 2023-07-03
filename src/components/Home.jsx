import "../styles/Style.css";
// import Forest from "../photos/forest.jpg";
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';

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
          {/* <img src={Forest} className="forest-image" alt="forest"></img> */}
          <h2 className="auto-text">{text}</h2>
        </div>
        <NavBar />
        <div className="vision">
        <title className="vision-t">Vision</title>
        <div className="vision-p">WE ARE CREATING AN ONLINE TRACKING AND TRACEABILITY SYSTEM TO HELP AVOCADO FARMERS ACCESS LOCAL AND EXPORT MARKET IN ORDER TO EARN MORE INCOME THAN THEY USUALLY DO FROM ALL AVOCADO VARIETIES.</div>
        <div className="vision-p1">PLACING SOLAR POWER CONTAINER COLD ROOMS IN STRATEGIC PLACES THAT ARE CLOSE TO THE FARMERS TO STORE, TO SEPARATE (THOSE MEANT FOR EXPORT, FOR SUPPLY AS RAW MATERIALS FOR AVOCADO ADD VALUE FACTORIES OR FOR LOCAL MARKET CONSUMPTION) AND COLLECTING CENTERS FOR THEIR HARVEST.</div>
        <div className="vision-p2">MARKET FOR ALL AVOCADO VARIETIES HARVEST, ACCESS TO CARBON CREDIT FUNDS AND WELL STRUCTURED SUPPLY CHAIN HENCE MOTIVATE FARMERS TO PLANT MORE AVOCADO TREES </div>
      </div>
      </div>
    </>
  );
}

export default Home;