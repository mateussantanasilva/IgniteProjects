import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

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

export const CountdownContainer = styled.section`
  display: flex;
  gap: 1.6rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 4rem 1.6rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  overflow: hidden;
  width: 7.2rem;
  padding: 3.2rem 0;

  color: ${(props) => props.theme['green-500']};
`

export const StartCountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.6rem 4rem;
  border-radius: 8px;

  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;
  background: ${(props) => props.theme['green-500']};
  transition: background 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
