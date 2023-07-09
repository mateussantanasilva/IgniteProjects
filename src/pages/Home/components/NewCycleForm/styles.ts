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

  div {
    position: relative;
  }

  @media (max-width: 455px) {
    margin-top: 4rem;
  }
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
  width: 28rem;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesQuantityInput = styled(BaseInput)`
  max-width: 6.4rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const ControllerButton = styled.button`
  position: absolute;
  cursor: pointer;

  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  line-height: 1rem;

  &:first-child {
    top: 1rem;
    left: 0rem;
  }

  &:last-child {
    top: 1rem;
    right: 0rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
