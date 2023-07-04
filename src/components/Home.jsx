import "./HomeStyle.css";
import React, { useState, useEffect } from 'react';
import Track from '../photos/tracking-app.png';
import Factory from '../photos/factory.png';
import Solar from '../photos/solar-energy.png';
import Market from '../photos/market.png';
import Farmer from '../photos/farmer.png';
import Export from '../photos/sharing.png';
import Export1 from '../photos/transform.png';
import Logistic from '../photos/transportation.png';
import Ignore from '../photos/ignore.png';
import Chain from '../photos/blockchain.png';
import Tree from '../photos/tree.png';
import Qr from '../photos/qr-code.png';
import Carbon from '../photos/transform.png';
import Buy from '../photos/payment-method.png';
import Gain from '../photos/gain.png';
import Supply from '../photos/supply-chain-management.png';
import MoU from '../photos/notes.png';
import Container from '../photos/container.png';


function Home() {


  const [text, setText] = useState('');
  const fullText = 'What are we waiting for to save the plane?.';
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
    <div>
      <div >
        <div className="image">
        <div className="text">
          <h2 className="auto-text">{text}</h2>
        </div>
        <div className="text1">
          <h2 className="auto-text">“We are the first generation to feel the impact of climate change, and the last generation that can do something about it.”Pres. Barack Obama at the first COP21

</h2>
        </div>
        </div>
      </div>
      <div className="home-v">
        <h1 className="vision-t">Vision</h1>
        <div className="vision">
        <div className="vision-p">WE ARE CREATING AN ONLINE TRACKING AND TRACEABILITY SYSTEM TO HELP AVOCADO FARMERS ACCESS LOCAL AND EXPORT MARKET IN ORDER TO EARN MORE INCOME THAN THEY USUALLY DO FROM ALL AVOCADO VARIETIES.
        <img src={Track} className="icon" alt="forest"></img>
        </div>
        <div className="vision-p1">PLACING SOLAR POWER CONTAINER COLD ROOMS IN STRATEGIC PLACES THAT ARE CLOSE TO THE FARMERS TO STORE, TO SEPARATE (THOSE MEANT FOR EXPORT, FOR SUPPLY AS RAW MATERIALS FOR AVOCADO ADD VALUE FACTORIES OR FOR LOCAL MARKET CONSUMPTION) AND COLLECTING CENTERS FOR THEIR HARVEST.
        <img src={Factory} className="icon" alt="forest"></img>
        </div>
        <div className="vision-p2">MARKET FOR ALL AVOCADO VARIETIES HARVEST, ACCESS TO CARBON CREDIT FUNDS AND WELL STRUCTURED SUPPLY CHAIN HENCE MOTIVATE FARMERS TO PLANT MORE AVOCADO TREES 
        <img src={Carbon} className="icon" alt="forest"></img>
        </div>
      </div>
      </div>
      <div className="home">
        <h1 className="problem-t">Problems</h1>
      <div className="problem">
        <div className="problem-p">FARMERS GAIN LESS INCOME FROM THEIR AVOCADO FARMING
        <img src={Farmer} className="icon" alt="forest"></img>
        </div>
        <div className="problem-p1">PAPART FROM HASS AND FUERTE WHICH DON’T EVEN MAKE IT FOR EXPORT 100%, THERE IS A SMALL FRAGMENTED MARKET AND NO ADD VALUE OF OTHER AVOCADO VARIETES
        <img src={Export} className="icon" alt="forest"></img>
        </div>
        <div className="problem-p2">DESPITE PLANTING AND EXPORTING AVOCADO FRUITS, THERE IS NO MEAN OF TRACKING AND TRACING TREES AND WHERE THE HARVEST ORIGINATED.
        <img src={Export1} className="icon" alt="forest"></img>
        </div>
        <div className="problem-p3">POOR LOGISTICS IN THE AVOCADO SUPPLY CHAIN
        <img src={Logistic} className="icon" alt="forest"></img>
        </div>
        <div className="problem-p4">FARMERS DON’T GET ACCESS TO CARBON CREDITS FUNDS DUE TO THEIR IGNORANCE ON THE MATTER OR LACK MEANS TO ACCESS THEM.
        <img src={Ignore} className="icon" alt="forest"></img>
        </div>
      </div>
      </div>
      <div className="home">
        <h1 className="solution-t">Solutions</h1>
      <div className="solution">
        <div className="solution-p">BY USING GPS & BLOCKCHAIN SYSTEMS IN OUR PLATFORM AND WORKING WITH OAF OUTGROWERS AND SITE CORDINATORS WE WILL;
        <img src={Chain} className="icon" alt="forest"></img>
        </div>
        <div className="solution-p1">TRACK AVOCADO TREES BY INCLUDING WHERE THE TREE IS LOCATED, TYPE OF THE TREE AND THE DAY IT WAS PLANTED HENCE HELP FARMERS GET ACCESS TO CARBON CREDITS AND FOLLOW UP ON THE SURVIVAL RATE OF THE SEEDLINGS PROVIDED BY OAF
        <img src={Tree} className="icon" alt="forest"></img>
        .</div>
        <div className="solution-p2">EXPORT TRACEABLE HARVEST BY PUTTING A QR CODE STICKERS ON THE AVOCADOS
        <img src={Qr} className="icon" alt="forest"></img>
        </div>
        <div className="solution-p3">COLLECT THE HARVEST AND STORE THEM INTO SOLAR POWER GENERATED COLD ROOMS WHICH WILL BE LOCATED NEAR THE FARMERS
        <img src={Solar} className="icon" alt="forest"></img>
        </div>
        <div className="solution-p4">PROVIDE A MARKET FOR ALL AVOCADO VARIETES HARVEST
        <img src={Market} className="icon" alt="forest"></img>
        </div>
      </div>
      </div>
      <div className="home">
        <h1 className="business-t">Businesss</h1>
      <div className="business">
        <div className="business-p">BUYING & EXPORTING TRACEABLE AVOCADOS FROM FARMERS BY USING QR CODES STICKERS ON THE FRUITS
        <img src={Buy} className="icon" alt="forest"></img>
        </div>
        <div className="business-p1">GAINING COMMISSION FROM THE CARBON CREDITS
        <img src={Gain} className="icon" alt="forest"></img>
        </div>
        <div className="business-p2">SUPPLY RAW MATERIALS TO FACTORIES THAT ADD VALUE TO AVOCADO HARVEST
        <img src={Supply} className="icon" alt="forest"></img>
        </div>
      </div>
      </div>
      <div className="home">
        <h1 className="traction-t">Traction</h1>
      <div className="traction">
        <div className="traction-p">WE HAVE AN MOU WITH KIIWP PROJECT THAT HAVE PLANTED MORE THAN 60,000 AVOCADO TREES.
        <img src={MoU} className="icon" alt="forest"></img>
        </div>
        <div className="traction-p1">AN MOU WITH “I CHILL” A COMPANY THAT MANUFACTURES SOLAR POWER COLD ROOM CONTAINERS IN RWANDA TO SUPPLY US
        <img src={Container} className="icon" alt="forest"></img>
        </div>
      </div>
      </div>
      <div className="home">
        <h1 className="team-t">Team</h1>
      <div className="team">
        <div className="team-p">BINEZA RICHARD, A JASIRI FELLOW AND CEO WITH MORE THAN 5 YEARS IN BUSINESS MANAGEMENT</div>
        <div className="team-p1">NENGO ALLY, A JASIRI FELLOW AND CTO WITH MORE THAN 4 YEARS IN SOFTWARE ENGINEERING.</div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;