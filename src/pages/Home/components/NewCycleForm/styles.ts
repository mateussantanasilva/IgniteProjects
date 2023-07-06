import styled from 'styled-components'

export const FormContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;

  font-size: 1.8rem;
  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input`
  height: 4rem;
  padding: 0.8rem;

  background: transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesQuantityInput = styled(BaseInput)`
  max-width: 6.4rem;
`
