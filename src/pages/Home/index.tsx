import React, { useState, useContext } from 'react'
import { Container, MainBanner, TextBox, Button, MenuContainer } from './styles'
import Lottie from 'react-lottie';
import Card from '../../components/Card'
import ModalCart from '../../components/ModalCart'
import api from '../../utils/api'
import CoffeeCup from '../../assets/coffee-cup.json'
import { OrderContext } from '../../context/Order';
import { animateScroll as scroll } from 'react-scroll'

const Home: React.FC = () => {
  interface IItems {
    id: string,
    name: string,
    price: number,
    description: string,
    image_url: string
  }
  const { products } = useContext(OrderContext);
  const [items, setItems] = useState<Array<IItems>>([])
  const [showModal, setShowModal] = useState(false);
  const visibilityModal = () => {
    setShowModal(false);
  };

  const getItems = () => {
    api.get('products', {
      auth: {
        username: 'gabriel.barbosa@gmail.com',
        password: 'cafesango'
      }
    })
      .then((response: any) => {
        setItems(response.data)
        scroll.scrollTo(700)
      })
      .catch((error: any) => {
      })
  }

  const makePayment = () => {
    scroll.scrollToTop()
    setShowModal(true);
  }

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: CoffeeCup,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <MainBanner>
        <TextBox>
          <h1>Seja bem vindo ao café <span>Sango</span> </h1>
          <Lottie options={animationOptions}
            height={300}
            width={300}
          />
          <Button onClick={() => getItems()} > Cardápio </Button>
        </TextBox>
      </MainBanner>
      <MenuContainer>
        {items &&
          items.map((item: IItems) => {
            return <Card key={item.id} name={item.name} price={item.price} description={item.description} image={item.image_url} />
          })
        }
      </MenuContainer>
      {products.length > 0 &&
        <Button onClick={() => makePayment()} > Comprar </Button>
      }
      <ModalCart
        visibility={showModal}
        modalHandler={visibilityModal}
      />
    </Container>
  )
}

export default Home
