import { useFormContext } from 'react-hook-form'
import { PaymentMethodButton } from '../PaymentButton'
import { MapPin, CurrencyDollar } from '@phosphor-icons/react'
import {
  DeliveryAndPaymentContainer,
  DeliveryContainer,
  MultiInputsContainer,
  PaymentContainer,
  SelectedPaymentContainer,
} from './styles'

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
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
          <input type="text" placeholder="CEP" required {...register('cep')} />
          <input
            type="text"
            placeholder="Rua"
            required
            {...register('street')}
          />

          <MultiInputsContainer>
            <input
              type="text"
              placeholder="Número"
              required
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
              required
              {...register('neighborhood')}
            />
            <input
              type="text"
              placeholder="Cidade"
              required
              {...register('city')}
            />
            <input type="text" placeholder="UF" {...register('uf')} required />
          </MultiInputsContainer>
        </div>
      </DeliveryContainer>

      <PaymentContainer>
        <header>
          <CurrencyDollar size={'2.2rem'} weight="regular" />

          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
  )
}
