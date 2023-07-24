interface ProductProps {
  params: {
    id: number
  }
}

export default function Product({ params }: ProductProps) {
  return <h1>Product: {params.id}</h1>
}
