import Stripe from 'stripe';
import * as Yup from 'yup';

import dotenv from 'dotenv';
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class CreatePaymentIntentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
          }),
        ),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    try {
      const { products } = req.body;

      // Calcula o total em centavos
      const amount = products.reduce((total, product) => {
        return total + (product.price * product.quantity * 100);
      }, 0);

      // Cria o Payment Intent no Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount),
        currency: 'brl',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CreatePaymentIntentController();