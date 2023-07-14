import styled, { css } from 'styled-components'
import { WrapperStyle } from '../globals'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 44.8rem;
  gap: 3.2rem;

  ${WrapperStyle}
  margin-top: calc(4rem + ${(props) => props.theme['--header-height']});

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BaseTitle = css`
  color: ${(props) => props.theme['--base-subtitle']};
  margin-bottom: 1.5rem;
`
