import { ProductType } from '@/app/page'
import { stripe } from '@/libs/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { cartItems } = await request.json() // request.body

  if (!cartItems) {
    return NextResponse.json({ status: 400, error: 'Cart items not found' })
  }

  const lineItems = cartItems.map((item: ProductType) => {
    return { price: item.defaultPriceId, quantity: 1 }
  })

  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return NextResponse.json({
    status: 201,
    sessionId: checkoutSession.id,
    checkoutUrl: checkoutSession.url,
  })
}
