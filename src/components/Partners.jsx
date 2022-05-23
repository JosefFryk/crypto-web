import React from 'react';
import styled from 'styled-components';

// partners
import boeing from '../images/partners/Boeing.png';
import chainlink from '../images/partners/link.png'
import dbs from '../images/partners/dbs.png'

function Partners() {
  return (
    <StyledBox>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://www.boeing.com/' target="_blank" rel="noreferrer" >
            <img src={boeing} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
        <a href='https://chainlinklabs.com/' target="_blank" rel="noreferrer" >
            <img src={chainlink} alt='partner' />
        </a>
        <a href='https://www.dbs.com.sg/index/default.page' target="_blank" rel="noreferrer" >
            <img src={dbs} alt='partner' />
        </a>
   
      
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: block;  
  padding: 5%;
   

 a  {
    
    img {
      background: white;
      width: 250px;
      border-radius: 5px;
      padding: 6px;
      margin-right: 10px;
    }
   
    &:hover {
      opacity: 0.8;
    }
   
  }
`;

export default Partners;