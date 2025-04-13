import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateChargeDto } from '../../../libs/common/src/dto/create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2025-02-24.acacia',
    },
  );

  constructor(private readonly configService: ConfigService) {}

  async createCharge({ card, amount }: CreateChargeDto) {
    console.log('adasdt');

    // const paymentMethod = await this.stripe.paymentMethods.create({
    //   type: 'card',
    //   card,
    //   // payment_method: 'pm_card_visa',
    // });

    // const paymentIntent = await this.stripe.paymentIntents.create({
    //   payment_method: paymentMethod.id,
    //   amount: 0.01,
    //   confirm: true,
    //   // payment_method_types: ['pm_card_visa'],
    //   currency: 'usd',
    //   payment_method_types: ['card'],
    // });

    const res = await this.stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      payment_method: 'pm_card_visa', // <-- This is a Stripe test token
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

    return res;

    // return paymentIntent;
  }
}
