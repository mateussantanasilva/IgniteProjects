import { Counter } from '@/components/Counter'
import { ShoppingCart } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormContainer } from './styles'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { z } from 'zod'

export interface AddToCartFormProps {
  id: string
  name: string
  src: string
  alt: string
}

const AddToCartFormValidationSchema = z.object({
  amountCoffee: z.number().min(0).max(30),
})
type AddToCartFormData = z.infer<typeof AddToCartFormValidationSchema>

export function AddToCartForm({ id, name, src, alt }: AddToCartFormProps) {
  const [amountCoffee, setAmountCoffee] = useState(0)

  const { addItemToCart } = useContext(ShoppingCartContext)

  const addToCartForm = useForm<AddToCartFormData>({
    resolver: zodResolver(AddToCartFormValidationSchema),
    defaultValues: {
      amountCoffee: 0,
    },
  })
  const { handleSubmit } = addToCartForm

  function handleAddItemToCart({ amountCoffee }: AddToCartFormData) {
    const cartItem = {
      id,
      name,
      src,
      alt,
      amountCoffee,
    }

    addItemToCart(cartItem)
    setAmountCoffee(0)
  }

  function changeAmountCoffee(newAmountCoffee: number) {
    setAmountCoffee(newAmountCoffee)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleAddItemToCart)}>
      <FormProvider {...addToCartForm}>
        <Counter
          amountCoffee={amountCoffee}
          changeAmountCoffee={changeAmountCoffee}
        />
      </FormProvider>

      <button type="submit" title="Adicionar ao carrinho de compras">
        <ShoppingCart size={'2.2rem'} weight={'fill'} />
      </button>
    </FormContainer>
  )
}
