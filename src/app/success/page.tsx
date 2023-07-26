import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { SuccessContent } from './components/SuccessContent'

interface SuccessProps {
  searchParams: {
    session_id: string
  }
}

export const metadata: Metadata = {
  title: 'Compra efetuada | Ignite Shop',
  robots: {
    index: false, // out of any indexing
  },
}

async function getCheckoutSessionId(session_id: string) {
  if (!session_id) redirect('/')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    customerName,
    product: {
      name: product.name,
      imageUrl: product.images[0],
    },
  }
}

export default async function Success({ searchParams }: SuccessProps) {
  const { customerName, product } = await getCheckoutSessionId(
    searchParams.session_id,
  )

  return (
    <SuccessContent customerName={customerName as string} product={product} />
  )
}
