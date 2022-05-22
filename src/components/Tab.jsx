import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//images

import btc from '../images/Bitcoin.png'
import eth from '../images/eth.png'
import addoken from '../images/default.svg'

function Tab() {
  return (


    
    <WrapperTab>
  {/* prvni sloupec */}
  <div className='sloupec'>

    <StyledTab className='empty'>
    </StyledTab>
    <StyledTab>
        <span>TRANSACTIONS PER SECOND</span>
    </StyledTab>
    <StyledTab>
       <span>AVERAGE FEE PER TRANSACTION</span>
    </StyledTab>
    <StyledTab>
        <span>TRANSACTION CONFIRMATION</span>
    </StyledTab>
    <StyledTab>
        <span>ENERGY USE PER TRANSACTION</span>
    </StyledTab>
  </div>
{/* druhy sloupec */}
<div>

    <StyledTab>
        <div>
            <p>1st GENERATION</p>
        </div>
        <div>
            <img src={btc} alt='btc' className='btc'></img>
        </div>
        <div>
            <p>BTC</p>
        </div>
    </StyledTab>
    <StyledTab>
        <p>3+</p>
        <span>TPS</span>
    </StyledTab>
    <StyledTab>
        <p>$22.57</p>
        <span>USD*</span>
    </StyledTab>
    <StyledTab>
        <p>10-60</p>
        <span>MINUTES</span>
    </StyledTab>
    <StyledTab>
        <p>885+</p>
        <span>KWH^^</span>
    </StyledTab>
</div>
{/* treti sloupec */}
<div className='sloupec'>
<StyledTab>
        <div>
            <p>2nd GENERATION</p>
        </div>
        <div>
            <img src={eth} alt='eth' className='eth'></img>
        </div>
        <div>
            <p>ETH</p>
        </div>
    </StyledTab>
    <StyledTab>
        <p>12+</p>
        <span>TPS</span>
    </StyledTab>
    <StyledTab>
        <p>$19.57</p>
        <span>USD^^</span>
    </StyledTab>
    <StyledTab>
        <p>10-20</p>
        <span>SECONDS</span>
    </StyledTab>
    <StyledTab>
        <p>102+</p>
        <span>KWH^^</span>
    </StyledTab>
</div>
{/* ctvrty sloupec */}
<div className='sloupec'>

    <StyledTab>
        <div>
            <p>3rd GENERATION</p>
        </div>
        <div>
            <img src={addoken} alt='AOK' className='addoken'></img>
        </div>
        <div>
            <p>AOK</p>
        </div>
    </StyledTab>
    <StyledTab>
        <p>12000+</p>
        <span>TPS</span>
    </StyledTab>
    <StyledTab>
        <p>$0.57</p>
        <span>USD^^</span>
    </StyledTab>
    <StyledTab>
        <p>1-3</p>
        <span>SECONDS</span>
    </StyledTab>
    <StyledTab>
        <p>0.001+</p>
        <span>KWH^^</span>
    </StyledTab>
</div>

    </WrapperTab>

  );
}

const StyledTab = styled.div`
    padding: 0;
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    border: 1px solid #3A3A3A;
    box-sizing: border-box;
    flex: 1 1 24%;
    width:200px;
    align-items:center;
    padding: 30px;
    

    .addoken {
        height: 70px;
        width: 60px;
    }
    .btc {
        height: 70px;
        width: 50px;
    }
    .eth {
        height: 70px;
        width: 50px;
    }
   
  
    

  
`;
const WrapperTab = styled.div`
        color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding-left: 100px;

       
        
        

  
`;

export default Tab;