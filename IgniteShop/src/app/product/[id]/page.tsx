import { stripe } from '@/libs/stripe'
import Stripe from 'stripe'
import { Metadata } from 'next'
import { ProductDetails } from './components/ProductDetails'
import { Header } from '@/components/Header'

interface ProductProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Detalhes do Produto | Ignite Shop',
}

export const revalidate = 60 * 60 * 1 // SSG: revalidate data after 1 hour (in seconds)

async function getProduct(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    product: {
      sku: product.id,
      id: product.id,
      defaultPriceId: price.id,
      name: product.name,
      image: product.images[0],
      currency: price.currency,
      price: price.unit_amount as number,
      description: product.description as string,
    },
  }
}

export default async function Product({ params }: ProductProps) {
  const { product } = await getProduct(params.id)

  return (
    <>
      <Header />
      <ProductDetails product={product} />
    </>
  )
}
