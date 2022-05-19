import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//images

import btc from '../images/Bitcoin.png'
import eth from '../images/eth.png'
import addoken from '../images/default.svg'

function Tab() {
  return (
    <div>
  {/* prvni sloupec */}
    <StyledTab>
    </StyledTab>
    <StyledTab>
        <span>TRANSACTIONS PER SECOND</span>
    </StyledTab>
    <StyledTab>
       <span>AVERAGE FEE</span>
    </StyledTab>
    <StyledTab>
        <span>TRANSACTION CONFIRMATION</span>
    </StyledTab>
    <StyledTab>
        <span>ENERGY USE PER TRANSACTION</span>
    </StyledTab>
{/* druhy sloupec */}
    <StyledTab>
        <div>
            <p>1st GENERATION</p>
        </div>
        <div>
            <img src={btc} alt='btc'></img>
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
{/* treti sloupec */}
<StyledTab>
        <div>
            <p>2nd GENERATION</p>
        </div>
        <div>
            <img src={eth} alt='eth'></img>
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
{/* ctvrty sloupec */}
    <StyledTab>
        <div>
            <p>3rd GENERATION</p>
        </div>
        <div>
            <img src={addoken} alt='AOK'></img>
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
  );
}

const StyledTab = styled.div`
    padding: 0;
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid #3A3A3A;
    box-sizing: border-box;
  
`;

export default Tab;