'use client'

import { useState, useEffect } from 'react'

import { Header } from '@/components/Header'
import { FormCreateTask } from '@/components/FormCreateTask'
import { ListWithoutTask } from '@/components/ListWithoutTask'
import { Task } from '@/components/Task'

import styles from './page.module.css'

export interface TaskTemplate {
  id: string
  content: string
  hasDone: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskTemplate[]>([])
  const [completedTasks, setCompletedTasks] = useState<number>(0)
  const numberOfTasks = tasks.length
  const listIsOutOfTasks = numberOfTasks === 0

  useEffect(() => {
    showTaskProgress() // runs ever the task value is updated
  }, [tasks])

  function createNewTask(newTask: TaskTemplate) {
    setTasks([...tasks, newTask])
  }
  function changeTaskStatus(id: string) {
    const tasksWithCurrentStatus = tasks.map((task) => {
      if (task.id !== id) return task

      const taskSelected = task

      if (taskSelected.hasDone === true) {
        taskSelected.hasDone = false
      } else {
        taskSelected.hasDone = true
      }

      return task
    })

    setTasks(tasksWithCurrentStatus)
  }
  function showTaskProgress() {
    const completedTasks = tasks.filter((task) => task.hasDone).length

    setCompletedTasks(completedTasks)
  }
  function deleteTask(id: string) {
    const tasksWithoutTaskToDelete = tasks.filter((tasks) => tasks.id !== id)

    setTasks(tasksWithoutTaskToDelete)
  }

  return (
    <>
      <Header />

      <FormCreateTask onCreateNewTask={createNewTask} />

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <header>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span className={styles.numberTasksCreated}>{numberOfTasks}</span>
            </div>

            <div className={styles.tasksDone}>
              <strong>Concluídas</strong>
              <span className={styles.numberTasksDone}>
                {listIsOutOfTasks
                  ? '0'
                  : `${completedTasks} de ${numberOfTasks}`}
              </span>
            </div>
          </header>

          <section className={styles.taskList}>
            {listIsOutOfTasks ? (
              <ListWithoutTask />
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  onChangeTaskStatus={changeTaskStatus}
                  onDeleteTask={deleteTask}
                />
              ))
            )}
          </section>
        </div>
      </main>
    </>
  )
}
