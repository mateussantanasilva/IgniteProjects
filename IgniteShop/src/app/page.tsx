import Stripe from 'stripe'
import { stripe } from '@/libs/stripe'
import { Carousel } from './components/Carousel'
import { Metadata } from 'next'
import { Header } from '@/components/Header'

export interface ProductType {
  id: string
  sku: string
  name: string
  image: string
  currency: string
  price: number
  defaultPriceId: string
  description?: string
}

export const metadata: Metadata = {
  title: 'Home | Ignite Shop',
}

export const revalidate = 60 * 60 * 1 // SSG: revalidate data after 1 hour (in seconds)

async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'], // need the data before for arrays
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      sku: product.id,
      name: product.name,
      image: product.images[0],
      currency: price.currency,
      price: price.unit_amount as number,
      defaultPriceId: price.id,
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <Carousel products={products} />
    </>
  )
}
