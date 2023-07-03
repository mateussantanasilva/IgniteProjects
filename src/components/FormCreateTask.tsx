'use client'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './FormCreateTask.module.css'

export function FormCreateTask() {
  return (
    <form className={styles.formCreateTask}>
      <input type="text" name="task" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <PlusCircle size={'1rem'} weight="bold" />
      </button>
    </form>
  )
}
