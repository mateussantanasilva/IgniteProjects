import { CartItem } from "../CartItem";
import { ShoppingCartContainer, CartFooterContainer } from "./styles";

export function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <h5>Cafés selecionados</h5>

      <section>
        <CartItem />
        <CartItem />

        <CartFooterContainer>
          <ul>
            <li>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </li>

            <li>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </li>

            <li>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </li>
          </ul>

          <button type="submit">Confirmar pedido</button>
        </CartFooterContainer>
      </section>
    </ShoppingCartContainer>
  )
}