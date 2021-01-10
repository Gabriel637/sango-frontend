import styled from 'styled-components'

export const Container = styled.div`
  max-width: 270px;
  margin: 25px;
  background: linear-gradient(0deg, rgba(22,251,103,1) 47%, rgba(65,65,65,1) 100%);  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  justify-self: center;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 36px;
  }
`

export const ProductPic = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 150px;
  width: 150px;
  border-radius:5px;
  align-self: center;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  h3{
    font-size: 24px;
    text-align: center;
  }
  p{
    font-size: 14px;
    text-align: center;
  }
`

export const OrderContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Note = styled.div`
  p{
    text-align: center;
    font-size: 16px;
  }
  textarea{
    margin: 10px;
    color: black;
    width: 90%;
    border-radius: 5px;
  }
`;

export const QuantityContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  h3{
    text-align: center;
    font-size: 24px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  font-size: 32px;
  padding: 10px 40px;
  border-radius: 5px;
  border: 0;
  :hover{
    cursor: pointer;
  }
`
