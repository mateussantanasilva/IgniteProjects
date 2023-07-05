import { HistoryContainer, Status, TaskHistory } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <TaskHistory>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'green'}>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'yellow'}>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'red'}>Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'green'}>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'green'}>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status taskStatusColor={'green'}>Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TaskHistory>
    </HistoryContainer>
  )
}
