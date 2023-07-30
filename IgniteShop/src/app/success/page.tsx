import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { SuccessContent } from './components/SuccessContent'
import { Header } from '@/components/Header'

interface SuccessProps {
  searchParams: {
    session_id: string
  }
}

export interface PurchaseData {
  customerName: string
  products: {
    id: string
    name: string
    imageUrl: string
  }[]
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

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    customerName,
    products,
  }
}

export default async function Success({ searchParams }: SuccessProps) {
  const purchaseData = await getCheckoutSessionId(searchParams.session_id)

  if (!purchaseData) redirect('/')

  return (
    <>
      <Header justLogo />
      <SuccessContent purchaseData={purchaseData as PurchaseData} />
    </>
  )
}
