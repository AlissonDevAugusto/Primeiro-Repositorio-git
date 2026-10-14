import { ArrowRightIcon, CheckCircleIcon, CircleNotchIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import stripePromise from '../../config/stripeConfig';
import {
  Card,
  CardFooter,
  Container,
  Details,
  DetailItem,
  IconBadge,
  LoadingState,
  Message,
  StatusBadge,
  Subtitle,
  Title,
} from './styles.js';
import { ButtonFollow } from '../../components/button';

const statusLabels = {
  succeeded: 'Pagamento aprovado',
  processing: 'Pagamento em processamento',
  requires_payment_method: 'Pagamento nao concluido',
  requires_action: 'Acao necessaria',
  canceled: 'Pagamento cancelado',
};

// Consulta e apresenta o resultado final do pagamento realizado.
export function CompletePayment() {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const clientSecret =
    searchParams.get('payment_intent_client_secret') || state?.clientSecret;
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const verifyPayment = async () => {
      if (!clientSecret) {
        if (isMounted) {
          setMessage('Payment Intent nao encontrado.');
          setLoading(false);
        }
        return;
      }

      try {
        const stripe = await stripePromise;

        if (!stripe) throw new Error('Stripe nao foi carregado.');

        const { paymentIntent: retrievedPaymentIntent, error } =
          await stripe.retrievePaymentIntent(clientSecret);

        if (error) throw error;
        if (!isMounted) return;

        setPaymentIntent(retrievedPaymentIntent);
        setMessage(
          retrievedPaymentIntent?.status === 'succeeded'
            ? 'Seu pagamento foi confirmado e seu pedido ja esta sendo preparado.'
            : 'Nao foi possivel confirmar o pagamento.',
        );
      } catch {
        if (isMounted) setMessage('Erro ao verificar pagamento.');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    verifyPayment();

    return () => {
      isMounted = false;
    };
  }, [clientSecret]);

  if (loading) {
    return (
      <Container>
        <LoadingState>
          <CircleNotchIcon size={42} weight="bold" />
          <span>Verificando seu pagamento...</span>
        </LoadingState>
      </Container>
    );
  }

  const isSuccess = paymentIntent?.status === 'succeeded';
  const statusText = statusLabels[paymentIntent?.status] || 'Status indisponivel';

  return (
    <Container $success={isSuccess}>
      <Card>
        <IconBadge $success={isSuccess}>
          <CheckCircleIcon size={54} weight="fill" />
        </IconBadge>
        <Title>{isSuccess ? 'Pedido confirmado!' : 'Pagamento pendente'}</Title>
        <Subtitle>{message}</Subtitle>

        {paymentIntent && (
          <Details>
            <DetailItem>
              <span>Status</span>
              <StatusBadge $success={isSuccess}>{statusText}</StatusBadge>
            </DetailItem>
            <DetailItem>
              <span>Codigo do pagamento</span>
              <strong>{paymentIntent.id}</strong>
            </DetailItem>
          </Details>
        )}

        <CardFooter>
          <Message>Obrigado pela escolha.</Message>
          <ButtonFollow as={Link} to="/" $compact className="complete-button">
            Voltar para Loja
          </ButtonFollow>
        </CardFooter>
      </Card>
    </Container>
  );
}
