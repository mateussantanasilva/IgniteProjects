import Image from "next/image";
import { Counter } from "@/components/Counter";
import { Trash } from "@phosphor-icons/react";
import { CartItemDivisor, CartItemContainer, ItemInformationContainer } from "./styles";

export function CartItem() {
  return (
    <CartItemDivisor>
      <CartItemContainer>
        <section>
          <Image
            src={'/coffees/traditional.svg'}
            alt="Xícara de café tradicional"
            width={64}
            height={64}
          />

          <ItemInformationContainer>
            <p>Expresso Tradicional</p>

            <div>
              <Counter />

              <button type="button">
                <Trash size={'1.6rem'} />
                Remover
              </button>
            </div>
          </ItemInformationContainer>
        </section>

        <strong>R$ 9,90</strong>
      </CartItemContainer>
    </CartItemDivisor>
  )
}