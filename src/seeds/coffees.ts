import { v4 as uuidv4 } from 'uuid'

type CoffeeCategory =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'alcoólico'
  | 'especial'

export interface Coffee {
  id: string
  name: string
  about: string
  categories: CoffeeCategory[]
  src: string
  alt: string
  price: number
}

export const coffees: Coffee[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    about: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['tradicional'],
    src: '/coffees/traditional.svg',
    alt: 'Xícara de café tradicional',
    price: 6.0,
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    about: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['tradicional'],
    src: '/coffees/american.svg',
    alt: 'Xícara de café americano',
    price: 7.0,
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    about: 'Café expresso tradicional com espuma cremosa',
    categories: ['tradicional'],
    src: '/coffees/creamy.svg',
    alt: 'Xícara de café cremoso',
    price: 8.0,
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    about: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['tradicional', 'gelado'],
    src: '/coffees/ice.svg',
    alt: 'Xícara de café gelado',
    price: 9.5,
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    about: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['tradicional', 'com leite'],
    src: '/coffees/milk.svg',
    alt: 'Xícara de café com leite',
    price: 7.5,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    about: 'Uma dose de café expresso com dobro de leite e espuma cremosa',
    categories: ['tradicional', 'com leite'],
    src: '/coffees/latte.svg',
    alt: 'Xícara de café latte',
    price: 8.5,
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    about: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['tradicional', 'com leite'],
    src: '/coffees/cappuccino.svg',
    alt: 'Xícara de café capuccino',
    price: 7.5,
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    about: 'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['tradicional', 'com leite'],
    src: '/coffees/macchiato.svg',
    alt: 'Xícara de café macchiato',
    price: 8.5,
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    about: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['tradicional', 'com leite'],
    src: '/coffees/mocha.svg',
    alt: 'Xícara de café mocaccino',
    price: 9.0,
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    about: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['especial', 'com leite'],
    src: '/coffees/chocolate.svg',
    alt: 'Xícara de chocolate quente',
    price: 8.0,
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['especial', 'alcoólico', 'gelado'],
    src: '/coffees/cuban.svg',
    alt: 'Xícara de café cubano',
    price: 9.5,
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    about: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['especial'],
    src: '/coffees/hawaiian.svg',
    alt: 'Xícara de café havaiano',
    price: 7.0,
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    about: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['especial'],
    src: '/coffees/arabic.svg',
    alt: 'Xícara de café árabe',
    price: 8.5,
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['especial', 'alcoólico'],
    src: '/coffees/irish.svg',
    alt: 'Xícara de café irlandês',
    price: 9.0,
  },
]
