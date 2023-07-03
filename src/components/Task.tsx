'use client'
import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskTemplate {
  id: string
  content: string
  onChangeTaskStatus: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({
  id,
  content,
  onChangeTaskStatus,
  onDeleteTask,
}: TaskTemplate) {
  function handleChangeTaskStatus() {
    onChangeTaskStatus(id)
  }
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <article className={styles.task}>
      <input
        type="checkbox"
        name="isDone"
        id={id}
        onChange={handleChangeTaskStatus}
      />
      <label className={styles.checkbox} htmlFor={id}>
        <Check weight="bold" size={'.7rem'} />
      </label>

      <p>{content}</p>

      <button
        className={styles.deleteTask}
        onClick={handleDeleteTask}
        title="Deletar tarefa"
      >
        <Trash size={'1.1rem'} />
      </button>
    </article>
  )
}
