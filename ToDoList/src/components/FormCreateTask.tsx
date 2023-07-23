'use client'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

import styles from './FormCreateTask.module.css'
import { TaskTemplate } from '@/app/page'

interface Form {
  onCreateNewTask: (newTask: TaskTemplate) => void
}

export function FormCreateTask({ onCreateNewTask }: Form) {
  const [textNewTask, setTextNewTask] = useState('')

  function handlePrepareNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setTextNewTask(event.target.value)
  }
  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      content: textNewTask,
      hasDone: false,
    }
    onCreateNewTask(newTask)

    setTextNewTask('')
  }
  function handleThrowError(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <form className={styles.formCreateTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        onInvalid={handleThrowError}
        onChange={handlePrepareNewTask}
        value={textNewTask}
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={'1rem'} weight="bold" />
      </button>
    </form>
  )
}
