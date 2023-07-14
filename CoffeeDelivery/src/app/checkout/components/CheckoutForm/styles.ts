import styled from 'styled-components'
import { BaseTitle } from '../../styles'

export const DeliveryAndPaymentContainer = styled.section`
  h5 {
    ${BaseTitle}
  }
`

const BaseGrayContainer = styled.article`
  padding: 4rem;
  background: ${(props) => props.theme['--base-card']};
  border-radius: 0.6rem;

  header {
    display: flex;
    gap: 0.8rem;

    margin-bottom: 3.2rem;

    p:first-child {
      color: ${(props) => props.theme['--base-subtitle']};
    }

    p:last-child {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    padding: 2rem;
  }
`

export const DeliveryContainer = styled(BaseGrayContainer)`
  header {
    svg {
      color: ${(props) => props.theme['--yellow']};
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input:not(:has(+ span)) {
      padding: 1.2rem;
      flex: 1;

      background: ${(props) => props.theme['--base-input']};
      border: 1px solid ${(props) => props.theme['--base-button']};
      border-radius: 0.4rem;

      font-size: 1.4rem;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    input::placeholder {
      color: ${(props) => props.theme['--base-label']};
    }

    & > input:first-child {
      max-width: 20rem;
    }

    input:nth-child(3) {
      max-width: 6rem;
    }
  }
`

export const MultiInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  & > input:first-child {
    max-width: 20rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.4rem;

    flex: 1;

    background: ${(props) => props.theme['--base-input']};
    border: 1px solid ${(props) => props.theme['--base-button']};
    border-radius: 0.4rem;

    & > input {
      flex: 1;
      background: transparent;
      padding: 1.2rem;

      font-size: 1.4rem;
      color: ${(props) => props.theme['--base-label']};
    }

    & > span {
      padding-right: 1.2rem;

      font-size: 1.2rem;
      font-style: italic;
      color: ${(props) => props.theme['--base-label']};
    }
  }
`

export const PaymentContainer = styled(BaseGrayContainer)`
  margin-block: 1.2rem 2rem;

  header {
    svg {
      color: ${(props) => props.theme['--purple']};
    }
  }
`

export const SelectedPaymentContainer = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  margin-top: 3.2rem;
`
