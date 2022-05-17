import React from 'react';
import { Link } from 'react-router-dom';
import {VscRocket} from 'react-icons/vsc'
import { BiGasPump } from "react-icons/bi";
import { BsGlobe2} from "react-icons/bs";
import './Home.css'
import { IconContext } from "react-icons";

function Home() {
  return (
    <div className='wrapper-home'>
      <div className='leftSide'>
        <div className='top-nadpis'>
          <h4>Addoken</h4>
          <h1>Smart Contracts</h1>
          <h2>2.0</h2>
        </div>
        <div className='bottom-nadpis'>
          <p>Smart contracts, done <span className='orange-color'>smarter</span></p> 
          <button className='learn-btn'>
            <Link to="/whitepaper" className='btn-link'>Learn more</Link>
          </button>
        </div>

      </div>
      <div className='rightSide'>
        <div className='home-icon-right' > 
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem" }}>
          <VscRocket />
        </IconContext.Provider>
        <h2>10x faster then other blockchain alternatives</h2>
        </div>
        <div className='home-icon-right'>
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem" }}>
          <BsGlobe2 />
        </IconContext.Provider>
        <h2>Carbon negative</h2>
        </div>
        <div className='home-icon-right'>
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem" }}>
          <BiGasPump />
        </IconContext.Provider>
        <h2>Cheap gas fee</h2>
       
        </div>



      </div>

    
    </div>
  );
}

export default Home;