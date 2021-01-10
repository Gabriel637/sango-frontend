import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";
import px2vw from "../../utils/px2vw";

const bounceAnimation = keyframes`${bounceIn}`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CardBoxStyled = styled.div`
  animation: 1.2s ${bounceAnimation};
  border-radius: 1%;
  width: 90vw;
  height: 90vh;
/*   @media (min-width: 768px) {
    width: ${px2vw(600, 768)};
    height: ${px2vw(400, 768)};
  }
  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    height: ${px2vw(700)};
  } */
  z-index: 2;
  background: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 5%;
  padding: 1%;
  margin: 1%;
  border-bottom: 0.2px solid black;
`;

export const Title = styled.h1`
  color: black;
  font-size: 16px;
  font-style: italic;
  text-align: center;
`;

export const OverflowStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: 20px;
    @media(max-width: 1024px){
      flex-direction: column;
      margin: 0px;
    }
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 90%;
    p{
        color: black;
    }
    input{
        color: black;
        font-size: 20px;
        width: 100%;
        height: 40px;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
  background-color: var(--primary);
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 5px;
  border: 0;
  @media(min-width: 2559px){
    font-size: 50px;
  }
  :hover{
    cursor: pointer;
    background-color: var(--quaternary);
    box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17);
  }
`

export const ConfirmPayment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    margin: 50px 0;
    h1{
      color: black;
      margin: 50px 0;
    }
`

export const TextError = styled.div`
    color: red;
    font-size: 20px;
    margin: 10px 0;
    text-align: center;
`;