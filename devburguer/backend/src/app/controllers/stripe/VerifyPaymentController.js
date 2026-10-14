import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class VerifyPaymentController {
  async verify(req, res) {
    const { payment_intent } = req.query;

    if (!payment_intent) {
      return res.status(400).json({ error: 'payment_intent é obrigatório' });
    }

    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);

      return res.json({
        status: paymentIntent.status,
        paymentIntentId: paymentIntent.id,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new VerifyPaymentController();