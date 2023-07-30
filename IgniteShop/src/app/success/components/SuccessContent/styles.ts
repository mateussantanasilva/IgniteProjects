import { styled } from '@/styles'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingInline: '2rem',
  margin: '0 auto',
  minHeight: '50rem',

  textAlign: 'center',

  h1: {
    fontSize: '$2xl',
    lineHeight: '140%',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    lineHeight: '140%',

    maxWidth: '59rem',
    marginBlock: '2.4rem 6.4rem',
  },

  a: {
    fontSize: '$lg',
    fontWeight: 700,
    color: '$green500',

    transition: 'color .2s',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageItemsContainer = styled('section', {
  display: 'flex',
  marginBlock: '7.07rem 4.8rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '14rem',
    height: '14rem',

    padding: '.4rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
    background: 'linear-gradient(180deg, #00b37e 0%, #003d2a 100%)',
    borderRadius: '50%',

    '& + div': {
      marginLeft: '-5.5rem',
    },

    img: {
      objectFit: 'cover',
    },

    '@media (max-width: 425px)': {
      width: '10rem',
      height: '10rem',

      img: {
        width: '9rem',
        height: '9rem',
      },
    },
  },
})
