import { styled } from '@/styles'
import Link from 'next/link'

export const CarouselContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 118rem) / 2))',
  marginLeft: 'auto',
  marginBottom: '2rem',
})

export const Product = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  paddingBlock: '4rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'absolute',
    bottom: '.4rem',
    left: '.4rem',
    right: '.4rem',

    padding: '3.2rem',
    borderRadius: 6,
    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 700,
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
