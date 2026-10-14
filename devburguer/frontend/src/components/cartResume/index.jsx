import { Table } from '../table';

import { useState, useEffect } from 'react';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice.js';
import { useCart } from '../../hooks/cartContext.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  ContainerCart,
  ContainerHeader,
  ContainerSection,
} from './styles.js';

import { ButtonFollow } from '../../components';
import { setLocale } from 'yup';

// Calcula e apresenta o resumo do carrinho antes da finalização do pedido.
export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryPrice] = useState(500);

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllProducts = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllProducts);
  }, [cartProducts]);

  const navigate = useNavigate();

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      toast.success('Pedido, quase finalizado');

      const { data } = await api.post('/create-payment-intent', { products });
      setTimeout(() => {
        navigate('/checkout-finalizar', {
          state: data,
        });
      }, 2000);
    } catch (err) {
      toast.error('Erro, Tente novamente');
    }
  };

  return (
    <Container>
      <ContainerCart>
        <ContainerHeader>
          <p>Resumo do pedido</p>
        </ContainerHeader>

        <ContainerSection>
          <div class="divSection1">
            <div>
              <p>Itens</p>
              <br />
              <p>Taxa de entrega</p>
            </div>

            <div>
              <p>{formatPrice(finalPrice)}</p>
              <br />
              <p>{formatPrice(deliveryPrice)}</p>
            </div>
          </div>

          <div class="divSection2">
            <p>Total</p>
            <p>{formatPrice(finalPrice + deliveryPrice)}</p>
          </div>
        </ContainerSection>
      </ContainerCart>

      <ButtonFollow onClick={submitOrder}>Continuar</ButtonFollow>
    </Container>
  );
}
