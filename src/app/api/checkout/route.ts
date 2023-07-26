import { stripe } from '@/libs/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { priceId } = await request.json() // request.body

  if (!priceId) {
    return NextResponse.json({ status: 400, error: 'Price not found' })
  }

  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId, // item identifier
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return NextResponse.json({
    status: 201,
    checkoutUrl: checkoutSession.url,
  })
}
