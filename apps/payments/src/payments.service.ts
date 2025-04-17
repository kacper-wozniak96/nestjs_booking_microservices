import { NOTIFICATIONS_SERVICE } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import Stripe from 'stripe';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';
import { text } from 'stream/consumers';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2025-02-24.acacia',
    },
  );

  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {}

  async createCharge({ card, amount, email }: PaymentsCreateChargeDto) {
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

    this.notificationsService.emit('notify_email', {
      email,
      text: 'test',
    });

    return res;

    // return paymentIntent;
  }
}
