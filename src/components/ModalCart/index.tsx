import React, { useEffect, useState, useContext } from "react";
import Done from '../../assets/done.json';
import Lottie from 'react-lottie';
import api from '../../utils/api'
import { OrderContext } from '../../context/Order';

import {
    Header,
    Title,
    ContainerStyled,
    OverflowStyled,
    CardBoxStyled,
    ModalContent,
    PaymentRow,
    InputBox,
    TextError,
    Button,
    ConfirmPayment
} from "./styles";

interface Props {
    visibility: boolean,
    modalHandler: any
};

const ModalCart: React.FC<Props> = ({ visibility, modalHandler }) => {
    const [show, setShow] = useState(visibility);
    const [error, setError] = useState(false);
    const [payment, setPayment] = useState(false);
    const { products, totalPrice } = useContext(OrderContext);
    const [form, setForm] = useState({
        name: '',
        cardNumber: '',
        document: '',
        validDate: '',
        securityCode: '',
        totalPrice: totalPrice,
        products: products
    })

    useEffect(() => {
        setShow(visibility);
    }, [visibility]);

    const closeModal = () => {
        setShow(false);
        setPayment(false);
        modalHandler({ visibility: false, activated: false });
    };

    const pay = () => {
        api.post('/pay', form, {
            auth: {
                username: 'gabriel.barbosa@gmail.com',
                password: 'cafesango'
            }
        })
            .then((response: any) => {
                setPayment(true);
            })
            .catch((error: any) => {
                setError(true);
            })
    }

    const animationOptions = {
        loop: false,
        autoplay: true,
        animationData: Done,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <ContainerStyled style={{ visibility: show ? 'visible' : 'hidden' }}>
            <OverflowStyled
                onClick={() => {
                    closeModal();
                }}
            />
            <CardBoxStyled>
                <Header>
                    <Title>Obrigado por visitar o Café Sango</Title>
                </Header>
                <ModalContent>
                    {!payment ?
                        <>
                            <Title>Valor total de ${totalPrice}</Title>
                            <PaymentRow>
                                <InputBox>
                                    <p>Nome</p>
                                    <input onChange={(e) => setForm({ ...form, name: e.currentTarget.value })} />
                                </InputBox>
                                <InputBox>
                                    <p>Número do Cartão</p>
                                    <input onChange={(e) => setForm({ ...form, cardNumber: e.currentTarget.value })} />
                                </InputBox>
                            </PaymentRow>
                            <PaymentRow>
                                <InputBox>
                                    <p>CPF</p>
                                    <input onChange={(e) => setForm({ ...form, document: e.currentTarget.value })} />
                                </InputBox>
                                <InputBox>
                                    <p>Validade</p>
                                    <input onChange={(e) => setForm({ ...form, validDate: e.currentTarget.value })} />
                                </InputBox>
                                <InputBox>
                                    <p>Código de Segurança</p>
                                    <input onChange={(e) => setForm({ ...form, securityCode: e.currentTarget.value })} />
                                </InputBox>
                            </PaymentRow>
                            <Button onClick={() => pay()} > Comprar </Button>
                            {error &&
                                <TextError>
                                    Insira todos os dados corretamentes para finalizar a compra
                            </TextError>}
                        </> :
                        <ConfirmPayment>
                            <Lottie options={animationOptions}
                                height={200}
                                width={200}
                                onComplete={() => closeModal()}
                            />
                            <h1>Tudo certo, aproveite seu café!</h1>
                            <Button onClick={() => closeModal()} > Fechar </Button>
                        </ConfirmPayment>
                    }
                </ModalContent>
            </CardBoxStyled>
        </ContainerStyled>
    );
}

export default ModalCart;