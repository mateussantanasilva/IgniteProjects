import { styled } from '@/styles'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  minHeight: '50rem',

  h1: {
    fontSize: '$2xl',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',
    lineHeight: '140%',

    maxWidth: '59rem',
    marginBottom: '8.8rem',
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

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'min(13rem, 100%)',
  height: '14.5rem',

  marginBlock: '6.4rem 3.2rem',
  padding: '.4rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})
