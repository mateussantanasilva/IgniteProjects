import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  & > input {
    position: absolute;
    width: 0;
    height: 0;

    top: -1rem;
    left: -1rem;

    opacity: 0;
    visibility: hidden;
  }

  label {
    display: flex;
    gap: 1.2rem;

    padding: 1.6rem;
    background: ${(props) => props.theme['--base-button']};
    border: 1px solid transparent;
    border-radius: 0.6rem;
    cursor: pointer;

    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;

    svg {
      color: ${(props) => props.theme['--purple']};
    }

    transition: background 0.2s;
  }

  & > input:checked + label {
    background: ${(props) => props.theme['--purple-light']};
    border: 1px solid ${(props) => props.theme['--purple']};
  }

  & > input:not(:checked) + label:hover {
    background: ${(props) => props.theme['--base-hover']};
  }
`
