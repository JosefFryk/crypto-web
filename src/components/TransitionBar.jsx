import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




function TransitionBar() {
  return (
    <StyledLogo>
      <Link to='/features'>
        
        <h4>We added new feature!! Click</h4>
      </Link>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  padding-top: 10px;
  height: 120px;
  background:  rgb(2, 2, 88);
  border-top: 1px solid white;
  border-bottom : 2px solid black;


 a  {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      background: white;
      width: 30px;
      border-radius: 5px;
      padding: 2px;
      margin-right: 10px;
    }
    h4 {
      color: rgb(209, 148, 26);
      font-size: 1.5rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.mobile.medium})
 
`;

export default TransitionBar;