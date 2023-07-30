import { styled } from '@/styles'

export const ShoppingBagContainer = styled('button', {
  position: 'relative',
  zIndex: 500,

  padding: '1.2rem',
  borderRadius: 6,
  background: '$gray800',

  cursor: 'pointer',
  lineHeight: 0,
  color: '$gray500',

  transition: 'filter .2s',

  variants: {
    toHide: {
      true: {
        display: 'none',
      },
    },
    bagNotEmpty: {
      true: {
        '&::before': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          position: 'absolute',
          content: '',

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
      },
    },
  },

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const ShoppingBagContent = styled('section', {
  transition: 'all 0.2s',

  variants: {
    visible: {
      true: {
        transform: 'translateX(0)',
        opacity: 1,
      },
      false: {
        transform: 'translateX(100%)',
        opacity: 0,
      },
    },
  },

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  position: 'fixed',
  zIndex: 1000,

  top: 0,
  right: 0,

  padding: '4.8rem',
  width: 'min(48rem, 90%)',
  height: '100vh',
  overflowY: 'scroll',

  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

  '& > button': {
    position: 'absolute',
    top: '2.4rem',
    right: '2.4rem',

    background: 'transparent',
    cursor: 'pointer',
    lineHeight: 0,
  },

  h2: {
    marginTop: 'calc(7.2rem - 4.8rem)',
    fontSize: '$lg',
  },

  '@media (max-width: 425px)': {
    padding: '4.8rem 2rem 2rem',
  },

  '&::-webkit-scrollbar': {
    width: '1rem',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#363639',
    borderRadius: 10,
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '$gray900',
  },
})

export const ShoppingBagItems = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '2.4rem',

  marginBlock: '3.2rem',

  li: {
    display: 'flex',
    gap: '2rem',

    'div:first-child': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '10rem',
      height: '9.3rem',

      background: 'linear-gradient(180deg, #00b37e 0%, #003d2a 100%)',
      borderRadius: 8,

      img: {
        objectFit: 'cover',
      },
    },

    'div:last-child': {
      p: {
        color: '$gray300',
        marginBottom: '0.2rem',
      },

      button: {
        display: 'block',
        background: 'transparent',
        marginTop: '0.8rem',

        cursor: 'pointer',
        color: '$green500',
        fontSize: '1.6rem',
        fontWeight: 700,

        transition: 'color .2s',

        '&:hover': {
          color: '$green300',
        },
      },
    },
  },
})

export const ShoppingBagFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
      color: '$gray300',
      fontSize: '1.6rem',
    },

    'strong:last-child': {
      fontSize: '2.4rem',
    },
  },
})
