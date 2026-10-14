import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../config/stripeConfig';
import { CheckoutForm } from '../../components/stripe/checkoutForm';
import { CheckoutShell, CheckoutCard } from './styles.js';

// Cria a intenção de pagamento na API e prepara o formulário do Stripe.
export function Checkout() {

    const { state } = useLocation();
    const clientSecret = state?.clientSecret;

    if(!clientSecret) {
        return (<div>Erro, Prossiga com o pedido para finalizar</div>)
    }

    const options = {
      clientSecret,
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#9758a6',
          colorBackground: '#ffffff',
          colorText: '#333232',
          colorDanger: '#c23b3b',
          fontFamily: 'Poppins, sans-serif',
          borderRadius: '10px',
        },
        rules: {
          '.Label': { color: '#686868', fontWeight: '600' },
          '.Input': { boxShadow: '0 0 0 1px #e5dce8' },
          '.Input:focus': { boxShadow: '0 0 0 2px #9758a6' },
        },
      },
    };

    return (
      <CheckoutShell>
        <CheckoutCard>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </CheckoutCard>
      </CheckoutShell>
    );

}
