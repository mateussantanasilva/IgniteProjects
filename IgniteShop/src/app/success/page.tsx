import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import { stripe } from '@/libs/stripe'
import { Header } from '@/components/Header'
import { SuccessContent } from './components/SuccessContent'

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
  title: 'Compra efetuada',
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

  return (
    <>
      <Header justLogo />
      <SuccessContent purchaseData={purchaseData as PurchaseData} />
    </>
  )
}
