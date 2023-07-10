'use client'

import Image from "next/image";
import { Coffee } from "@/seeds/coffees";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, FooterContainer, FormContainer } from "./styles";

export function CardCoffee({ name, about, categories, ...props }: Coffee) {
  return (
    <CardContainer>
      <Image {...props} width={120} height={120} />

      <header>
        {categories.map(category => {
          return (
            <strong>{category}</strong>
          )
        })}
      </header>

      <h4>{name}</h4>

      <p>{about}</p>

      <FooterContainer>
        <div>
          <span>R$ </span><strong>9,90</strong>
        </div>

        <FormContainer>
          <div>
            <button type="button"><Minus size={'1.4rem'} weight={'bold'} /></button>
            <input type="number" value={10} readOnly min={1} max={30} />
            <button type="button"><Plus size={'1.4rem'} weight={'bold'} /></button>
          </div>

          <button type="submit" title="Adicionar ao carrinho de compras">
            <ShoppingCart size={'2.2rem'} weight={'fill'} />
          </button>
        </FormContainer>
      </FooterContainer>
    </CardContainer>
  )
}