import styled from 'styled-components'
import Banner from '../../assets/cafe.jpg'

export const Container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items: center; 
  flex-direction: column;
  background-color: var(--tertiary);
`
export const MainBanner = styled.div`
  width: 100vw;  
  height:100vh;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  backdrop-filter: blur(4px);
  
  h1{
    color: white;
    font-size: 40px;
    text-align: center;
  }
  @media(min-width: 2559px){
    h1{
    color: white;
    font-size: 60px;
    text-align: center;
  }
  }
`

export const Button = styled.button`
  background-color: var(--primary);
  font-size: 32px;
  padding: 10px 40px;
  border-radius: 5px;
  border: 0;
  margin: 20px 30px;
  @media(min-width: 2559px){
    font-size: 50px;
  }
  :hover{
    cursor: pointer;
    background-color: var(--quaternary);
    box-shadow: inset 2px -7px 11px rgba(80, 92, 51, 0.17);
  }
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  justify-content: center;
  @media(max-width: 1024px){
    grid-template-columns: 320px 320px;
  }
  @media(max-width: 767px){
    display: flex;
    flex-direction: column;
  }
  @media(min-width: 2559px){
    display: flex;
    flex-direction: row;
  }
`;
