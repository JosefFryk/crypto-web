import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


//components
import Partners from '../../components/Partners';
import TransitionBar from '../../components/TransitionBar';
import Tab from '../../components/Tab'


//icons
import {VscRocket} from 'react-icons/vsc'
import { BiGasPump } from "react-icons/bi";
import { BsGlobe2} from "react-icons/bs";
import { IconContext } from "react-icons";

//images
import globe from '../../images/globe.png'



function Home() {
  return (
    <div className='home-page'>
    {/* landing page */}
    <div className='wrapper-home-one wrapper'>
      <div className='leftSide'>
        <div className='top-nadpis'>
          <h4>Addoken</h4>
          <h1>Smart Contracts</h1>
          <h2>2.0</h2>
        </div>
        <div className='bottom-nadpis'>
          <p>Smart contracts, done <span className='orange-color'>smarter</span></p> 
          <button className='learn-btn'>
            <Link to="/whitepaper" className='btn-link-whitepaper'>Learn more</Link>
          </button>
        </div>

      </div>
      <div className='rightSide'>
        <div className='home-icon-right' > 
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem", color:'rgb(209, 148, 26)' }}>
          <VscRocket />
        </IconContext.Provider>
        <h2>10x faster then other <br></br>blockchain alternatives</h2>
        </div>
        <div className='home-icon-right'>
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem", color:'rgb(209, 148, 26)' }}>
          <BsGlobe2 />
        </IconContext.Provider>
        <h2>Carbon negative</h2>
        </div>
        <div className='home-icon-right'>
        <IconContext.Provider value={{  className: "global-class-name", size: "8rem", color:'rgb(209, 148, 26)' }}>
          <BiGasPump />
        </IconContext.Provider>
        <h2>Cheap gas fee</h2>
       
        </div>
      </div>
    </div>

      <>
      <TransitionBar/>
      </>
    {/* second scroll page */}
      <div className='wrapper-home-two wrapper'>
        
        <div className='home-partners'>
          <h2>Addoken partners</h2>
            <Partners/>
        </div>

        <div className='future-wrap'>

          <div className='left-side-future'>
            <h4>Join a future</h4>
            <p>Etiam posuere lacus quis dolor. Nulla non arcu lacinia neque faucibus fringilla. Proin mattis lacinia justo. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. 
            Donec vitae arcu. Aenean placerat. In convallis. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
             Aenean fermentum risus id tortor.</p>
            <button className='btn-future'>
              <Link to="/pricing" className='link-future' >Pricing</Link>
            </button>
          </div>
          <div className='right-side-future'>
            <img src={globe} alt='globe' className='globus'></img>
          </div>

        

        </div>
      </div>

      {/* third scroll page */}

      <div className='wrapper-home-third wrapper'>

        <div className='compare-text'>
          <h2>The 3rd generation public ledger</h2>
          <p> Aenean placerat. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              Nullam dapibus fermentum ipsum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nulla est. Quisque porta. Nullam at arcu a est sollicitudin euismod.
              Praesent in mauris eu tortor porttitor accumsan. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Maecenas sollicitudin. 
              <br></br>
              <br></br>
              Aenean placerat. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              Nullam dapibus fermentum ipsum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nulla est. Quisque porta. Nullam at arcu a est sollicitudin euismod.
              Praesent in mauris eu tortor porttitor accumsan. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Maecenas sollicitudin.
          </p>
          <button className='btn-services'>
          <Link to="/services" className='btn-link-services'>Discover more</Link>
          </button>
            
        </div>

        <div className='compare-tab'>
          <Tab/>
        </div>

      </div>

      <div>
        
      </div>
   
    </div>
  );
}

export default Home;