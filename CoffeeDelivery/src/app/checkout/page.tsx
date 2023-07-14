'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { AddressContext } from '@/contexts/AddressContext'
import { CheckoutForm } from './components/CheckoutForm'
import { ShoppingCart } from './components/ShoppingCart'
import { FormContainer } from './styles'

const FinalizeCheckoutFormValidationSchema = z.object({
  cep: z.string(),
  street: z.string(),
  numberHouse: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.string(),
})
type FinalizeCheckoutFormData = z.infer<
  typeof FinalizeCheckoutFormValidationSchema
>

export default function Checkout() {
  const { cartItemsState } = useContext(ShoppingCartContext)
  const router = useRouter()

  if (cartItemsState.length === 0) router.push('/')

  const { finalizeCheckout } = useContext(AddressContext)

  const finalizeCheckoutForm = useForm<FinalizeCheckoutFormData>({
    resolver: zodResolver(FinalizeCheckoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      numberHouse: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  })
  const { handleSubmit } = finalizeCheckoutForm

  function handleFinalizeCheckout({ ...props }: FinalizeCheckoutFormData) {
    finalizeCheckout({ ...props })

    router.push('/success')
  }

  return (
    <main>
      <FormContainer onSubmit={handleSubmit(handleFinalizeCheckout)}>
        <FormProvider {...finalizeCheckoutForm}>
          <CheckoutForm />
        </FormProvider>

        <ShoppingCart />
      </FormContainer>
    </main>
  )
}
