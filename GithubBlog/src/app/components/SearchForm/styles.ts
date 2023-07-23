import styled from 'styled-components'

export const SearchFormContainer = styled.section`
  width: min(86.4rem, 96%);
  margin: 7.2rem auto 0;
`

export const SearchFormContent = styled.form`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.2rem;

    strong {
      color: ${(props) => props.theme['--base-subtitle']};
      font-size: 1.8rem;
    }

    span {
      color: ${(props) => props.theme['--base-span']};
      font-size: 1.4rem;
    }
  }

  input {
    width: 100%;
    padding: 1.2rem 1.6rem;

    background: ${(props) => props.theme['--base-input']};
    border: 1px solid ${(props) => props.theme['--base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['--base-label']};
    }
  }
`
