import { useState } from 'react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

import { useCart } from '../../../hooks/cartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../../services/api.js';
import { ButtonFollow } from '../../button';

import '../styles.css';

// Processa o pagamento no Stripe e envia o usuário ao resultado da compra.
export function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartProducts, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      const { error: submitError } = await elements.submit();

      if (submitError) {
        toast.error(submitError.message);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout-concluido`,
        },
        redirect: 'if_required',
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (paymentIntent?.status !== 'succeeded') {
        setMessage('Pagamento nao foi concluido.');
        return;
      }

      const products = cartProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }));

      const { status } = await api.post(
        '/orders',
        { products },
        { validateStatus: () => true },
      );

      if (status === 200 || status === 201) {
        clearCart();
        toast.success('Pedido realizado com sucesso');
        navigate('/checkout-concluido', {
          replace: true,
          state: { clientSecret },
        });
        return;
      }

      if (status === 400) {
        toast.error('Falha ao finalizar pedido, reveja as informacoes');
        return;
      }

      throw new Error('Falha ao registrar o pedido');
    } catch {
      toast.error('Erro no sistema, tente novamente');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="checkout-heading">
        <span className="checkout-kicker">Finalização segura</span>
        <h1>Complete seu pedido</h1>
        <p>Revise os dados abaixo e escolha a forma de pagamento.</p>
      </div>
      <PaymentElement id="payment-element" />
      <ButtonFollow
        $compact
        type="submit"
        disabled={!stripe || !elements || isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? <div className="spinner"></div> : 'Pagar agora'}
      </ButtonFollow>
      {message && <div id="payment-message" role="alert">{message}</div>}
    </form>
  );
}
