/* eslint-disable prettier/prettier */

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0; // top, bottom, left, right = 0
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 53.5rem;
  padding: 4.8rem 4.8rem 4rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 3.2rem;

    input {
      padding: 1.6rem;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-900']};

      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 4rem;
      padding: 1.6rem;

      font-weight: 700;
      color: ${(props) => props.theme.white};
      cursor: pointer;

      background: ${(props) => props.theme['green-500']};
      border-radius: 6px;
      transition: background 0.2s;

      &:hover {
        background: ${(props) => props.theme['green-300']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  background: transparent;
  cursor: pointer;

  color: ${(props) => props.theme['gray-500']};
  line-height: 0;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  margin-top: 2.4rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 1.6rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};
  transition:
    background 0.2s,
    color 0.2s;

  svg {
    color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-700']
      : props.theme['red-700']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
    props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']};
  }
`
