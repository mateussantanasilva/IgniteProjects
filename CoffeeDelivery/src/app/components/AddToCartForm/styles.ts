import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > button {
    border-radius: 6px;
    background: ${(props) => props.theme['--purple-dark']};
    padding: 0.8rem;
    cursor: pointer;

    line-height: 0;
    transition: background 0.2s;

    svg {
      color: ${(props) => props.theme['--white']};
    }
  }

  & > button:hover {
    background: ${(props) => props.theme['--purple']};
  }
`
