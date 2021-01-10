// eslint-disable-next-line no-use-before-define
import React, { useState, useContext } from 'react'
import { Container, Price, ProductPic, Name, OrderContainer, QuantityContainer, Button, Note } from './styles'
import { OrderContext } from '../../context/Order';
interface CardProps {
  name: string,
  description: string,
  price: number,
  image: string
};

// eslint-disable-next-line react/prop-types
const Card: React.FC<CardProps> = ({ name, price, description, image }) => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [note, setNote] = useState('');
  const { products, totalPrice, setProducts, setTotalPrice } = useContext(OrderContext);

  const removeQuantity = () => {
    setOrderQuantity(orderQuantity - 1);
    removeProduct()
  }

  const addQuantity = () => {
    setOrderQuantity(orderQuantity + 1);
    addProduct()
  }

  const removeProduct = () => {
    setTotalPrice(totalPrice - price);
    products.splice(products.findIndex(item => item.product === name), 1);
  }

  const addProduct = () => {
    setTotalPrice(totalPrice + price);
    setProducts([...products, {
      product: name,
      price,
      note
    }]);
  }

  return (
    <Container>
      <Name>
        <h3>{name}</h3>
        <p>{description}</p>
      </Name>
      <ProductPic src={image} />
      <Price>
        <h3>$ {price}</h3>
      </Price>
      <OrderContainer>
        <QuantityContainer>
          <Button onClick={() => removeQuantity()} style={{ visibility: orderQuantity ? 'visible' : 'hidden' }} >-</Button>
          <h3>{orderQuantity}</h3>
          <Button onClick={() => addQuantity()}>+</Button>
        </QuantityContainer>
        <Note>
          <p>Observação</p>
          <textarea onChange={(e) => setNote(e.currentTarget.value)} />
        </Note>
      </OrderContainer>
    </Container>
  )
}

export default Card
