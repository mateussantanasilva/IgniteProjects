import { styled } from '@/styles'

export const CarouselContainer = styled('main', {
  display: 'flex',

  paddingLeft: '20.1rem',
  marginBottom: '2rem',

  position: 'relative',

  '&::before, &::after': {
    position: 'absolute',
    content: '',
    width: '13.6rem',

    top: 0,
    bottom: 0,

    transform: 'scaleX(1)',
    zIndex: '100',
  },

  '&::before': {
    left: 0,
    background:
      'linear-gradient(270deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  },

  '&::after': {
    right: 0,
    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  },

  '@media (max-width: 768px)': {
    marginTop: '6rem',
    paddingLeft: '2rem',

    '&::before, &::after': {
      content: 'initial',
    },
  },
})

export const Product = styled('article', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  paddingBlock: '4rem',
  background: 'linear-gradient(180deg, #00b37e 0%, #002b1e 100%)',
  borderRadius: 8,

  cursor: 'grab',
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
    cursor: 'default',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    a: {
      transition: 'filter .2s',

      '&:hover': {
        filter: 'brightness(0.8)',
      },

      strong: {
        display: 'block',
        marginBottom: '.4rem',

        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 700,
        color: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 768px)': {
    padding: 0,

    img: {
      width: '40rem',
      height: '40rem',
    },
  },
})
