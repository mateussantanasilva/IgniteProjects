import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  position: 'relative',
  zIndex: 500,

  padding: '1.2rem',
  borderRadius: 6,
  background: '$green500',

  cursor: 'pointer',
  lineHeight: 0,
  color: '$gray500',

  transition: 'background .2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },

  '&::before': {
    opacity: 0,
    visibility: 'hidden',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    content: '1',

    top: '-50%',
    right: '-50%',
    transform: 'translate(-50%, 50%)',

    width: '2.4rem',
    height: '2.4rem',

    background: '$green500',
    borderRadius: '50%',
    border: '3px solid $gray900',

    color: '$white',
    fontSize: '1.4rem',
    fontWeight: 700,
  },
})
