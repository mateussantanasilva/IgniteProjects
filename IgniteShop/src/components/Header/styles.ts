import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '4rem 2rem 3.2rem',
  width: 'min(118rem, 100%)',
  margin: '0 auto',

  variants: {
    isJustLogo: {
      true: {
        justifyContent: 'center',
      },
    },
  },

  '@media (max-width: 375px)': {
    img: {
      width: '12rem',
    },
  },
})
