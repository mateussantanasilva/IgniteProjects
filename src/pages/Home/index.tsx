import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesQuantityInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="taskSuggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="taskSuggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesQuantity">durante</label>
          <MinutesQuantityInput
            type="number"
            id="minutesQuantity"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span className="minutes">0</span>
          <span className="minutes">0</span>
          <Separator>:</Separator>
          <span className="seconds">0</span>
          <span className="seconds">0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={'2.4rem'} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
