import styled from 'styled-components';

interface BigRectangleProps {
  backgroundImage: string;
}

export const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const BigRectangle = styled.div<BigRectangleProps>`
   width: 100%;
  max-width: 289px;
  height: 439px;
  border-radius: 30px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    margin-right: 0;
  }
`;

export const SmallRectangle = styled.div`
  width: 100%;
  height: 234px;
  border-radius: 30px;
  background: rgba(255, 0, 0, 0.8);
  background: linear-gradient(180deg, 
    rgba(255, 0, 0, 0.8) 0%, 
    rgba(128, 0, 0, 0.3) 100%);
  padding: 10px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 200px;
    border-radius: 20px;
    padding: 5px;
  }
`;

export const CardTitle = styled.h3`
   margin: 0;
   font-size: 1.2em;

   @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const CardDescription = styled.p`
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin: 5px 0;
  }
`;

export const DetailLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;




