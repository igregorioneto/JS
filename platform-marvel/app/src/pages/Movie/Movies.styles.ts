import styled from 'styled-components';
import backgroundImage from '../../assets/background.png';


// Estilo para tela de login
export const Container = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  justify-content: center;
  height: 100vh;  
  background-size: cover;
  overflow: hidden;
  background-color: #000000;
  position: relative;

  color: #fff;

  .carousel-container {
    width: 80%;
    margin-top: 50px; /* Margem superior para separar o botão de filtro do carrossel */
  }

  .filter-button {
    position: absolute;
    top: 20px; /* Posicionamento em relação ao topo */
    left: 50%; /* Centralização horizontal */
    transform: translateX(-50%); /* Centralização horizontal */
    z-index: 1; /* Garante que o botão esteja acima do carrossel */
  }


  @media (min-width: 700px) {
    background: linear-gradient(89deg, 
    #000000 0.00%, 
    rgba(33,33,33,0.74 ) 67.44%, 
    rgba(128,128,128,0 ) 100.00%),
    url(${backgroundImage}) no-repeat right center;
  }

  @media (max-width: 1200px) {
    padding-left: 15vw;
  }

  @media (max-width: 992px) {
    padding-left: 10vw;
  }

  @media (max-width: 768px) {
    padding-left: 5vw;
  }

  @media (max-width: 576px) {
    padding-left: 2vw;
  }

  @media (max-width: 336px) {
    padding-left: 1vw;
  }
`;