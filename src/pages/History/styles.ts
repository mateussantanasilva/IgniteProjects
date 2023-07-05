import { styled } from 'styled-components'

const StatusColor = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const // allowed only these values

interface StatusProps {
  taskStatusColor: keyof typeof StatusColor
}

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 5rem;

  h1 {
    font-size: 2.4rem;
    line-height: 160%;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const TaskHistory = styled.div`
  margin-top: 3.2rem;
  flex: 1;
  overflow: auto; // generate scroll bar

  table {
    width: 100%;
    min-width: 60rem;
    border-collapse: collapse; // ignore border size

    th {
      background: ${(props) => props.theme['gray-600']};
      padding: 1.6rem;

      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.4rem;
      line-height: 160%;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      padding: 1.6rem;
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      font-size: 1.4rem;
      line-height: 160%;

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;

    border-radius: 50%;
    background: ${(props) => props.theme[StatusColor[props.taskStatusColor]]};
  }
`
