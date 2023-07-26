import Stripe from 'stripe'
import { stripe } from '@/libs/stripe'
import { Carousel } from './components/Carousel'
import { Metadata } from 'next'

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
    const convertedPrice = (price.unit_amount as number) / 100
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(convertedPrice)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return <Carousel products={products} />
}
