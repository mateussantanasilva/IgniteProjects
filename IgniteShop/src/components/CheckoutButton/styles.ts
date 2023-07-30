import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  marginTop: '5.5rem',

  padding: '2rem',
  background: '$green500',
  borderRadius: 8,

  cursor: 'pointer',
  fontWeight: 700,
  color: '$white',

  transition: 'background .2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
})
