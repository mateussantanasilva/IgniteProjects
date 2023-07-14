'use client'

import { Hero } from './components/Hero'
import { CardCoffee } from './components/CardCoffee'
import { coffees } from '@/seeds/coffees'
import { BackgroundBlur, CoffeesContainer, ListContainer } from './styles'

export default function Home() {
  return (
    <main>
      <BackgroundBlur>
        <Hero />
      </BackgroundBlur>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <ListContainer>
          {coffees.map((coffee) => {
            return <CardCoffee key={coffee.id} coffee={coffee} />
          })}
        </ListContainer>
      </CoffeesContainer>
    </main>
  )
}
