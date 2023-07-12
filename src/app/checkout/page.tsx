'use client'

import { ShoppingCart } from "./components/ShoppingCart";
import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import {
  FormContainer,
  DeliveryAndPaymentContainer,
  DeliveryContainer,
  PaymentContainer,
  SelectedPaymentContainer,
  MultiInputsContainer,
} from "./styles";
import { PaymentMethodButton } from "./components/PaymentButton";

export default function Checkout() {
  return (
    <main>
      <FormContainer>
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
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />

              <MultiInputsContainer>
                <input type="number" placeholder="Número" />
                <div>
                  <input type="text" placeholder="Complemento" />
                  <span>Opcional</span>
                </div>
              </MultiInputsContainer>

              <MultiInputsContainer>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </MultiInputsContainer>
            </div>
          </DeliveryContainer>

          <PaymentContainer>
            <header>
              <CurrencyDollar size={'2.2rem'} weight="regular" />

              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>

            <SelectedPaymentContainer>
              <PaymentMethodButton type="CreditCard" />
              <PaymentMethodButton type="Bank" />
              <PaymentMethodButton type="Money" />
            </SelectedPaymentContainer>
          </PaymentContainer>
        </DeliveryAndPaymentContainer>

        <ShoppingCart />
      </FormContainer>
    </main>
  )
}