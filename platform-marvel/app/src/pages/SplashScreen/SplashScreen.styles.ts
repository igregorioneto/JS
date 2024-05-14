import styled, { keyframes } from 'styled-components';
import backgroundImage from '../../assets/background.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;  
  background-size: cover;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
  background-color: #000000;  

  @media (min-width: 700px) {
    background: linear-gradient(89deg, 
    #000000 0.00%, 
    rgba(33,33,33,0.74 ) 67.44%, 
    rgba(128,128,128,0 ) 100.00%),
    url(${backgroundImage}) no-repeat right center;
  }
`;