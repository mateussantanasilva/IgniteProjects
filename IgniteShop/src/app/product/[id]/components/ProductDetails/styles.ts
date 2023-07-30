import { styled } from '@/styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '7.2rem',

  width: 'min(118rem, 100%)',
  margin: '0 auto 2rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'min(57.6rem, 100%)',
  height: '56rem',

  padding: '8.8rem 2.8rem',
  background: 'linear-gradient(180deg, #00b37e 0%, #003d2a 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const DetailsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: 'block',
    marginTop: '1.6rem',

    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '4rem',
    color: '$gray300',
  },
})
