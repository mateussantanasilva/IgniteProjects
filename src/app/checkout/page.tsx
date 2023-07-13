'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ShoppingCart } from './components/ShoppingCart'
import { PaymentMethodButton } from './components/PaymentButton'
import { CurrencyDollar, MapPin } from '@phosphor-icons/react'
import {
  FormContainer,
  DeliveryAndPaymentContainer,
  DeliveryContainer,
  PaymentContainer,
  SelectedPaymentContainer,
  MultiInputsContainer,
} from './styles'
import { useRouter } from 'next/navigation'
import { AddressContext } from '@/contexts/AddressContext'
import { useContext } from 'react'

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
  const router = useRouter()
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
  const { handleSubmit, register } = finalizeCheckoutForm

  function handleFinalizeCheckout({ ...props }: FinalizeCheckoutFormData) {
    finalizeCheckout({ ...props })
    router.push('/success')
  }

  return (
    <main>
      <FormContainer onSubmit={handleSubmit(handleFinalizeCheckout)}>
        <FormProvider {...finalizeCheckoutForm}>
          <DeliveryAndPaymentContainer>
            <h5>Complete seu pedido</h5>

            <DeliveryContainer>
              <header>
                <MapPin size={'2.2rem'} />

                <div>
                  <p>Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>

              <div>
                <input type="text" placeholder="CEP" {...register('cep')} />
                <input type="text" placeholder="Rua" {...register('street')} />

                <MultiInputsContainer>
                  <input
                    type="text"
                    placeholder="Número"
                    {...register('numberHouse')}
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    <span>Opcional</span>
                  </div>
                </MultiInputsContainer>

                <MultiInputsContainer>
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  <input type="text" placeholder="UF" {...register('uf')} />
                </MultiInputsContainer>
              </div>
            </DeliveryContainer>

            <PaymentContainer>
              <header>
                <CurrencyDollar size={'2.2rem'} weight="regular" />

                <div>
                  <p>Pagamento</p>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </header>

              <SelectedPaymentContainer>
                <PaymentMethodButton type="CreditCard" />
                <PaymentMethodButton type="Bank" />
                <PaymentMethodButton type="Money" />
              </SelectedPaymentContainer>
            </PaymentContainer>
          </DeliveryAndPaymentContainer>
        </FormProvider>

        <ShoppingCart />
      </FormContainer>
    </main>
  )
}
