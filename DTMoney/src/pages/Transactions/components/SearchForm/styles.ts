import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-900']};
    padding: 1.6rem;

    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.4rem 3.2rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    color: ${(props) => props.theme['green-300']};
    font-weight: 700;

    cursor: pointer;
    transition:
      backgroud 0.2s,
      border-color 0.2s,
      color 0.2s;

    svg {
      color: ${(props) => props.theme['green-300']};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }

  @media (max-width: 425px) {
    gap: 0.8rem;

    button {
      gap: 0;
      padding: 1.6rem;
      font-size: 0;
    }
  }
`
