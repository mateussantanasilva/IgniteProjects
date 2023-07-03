import Image from 'next/image'
import styles from './page.module.css'
import { FormCreateTask } from '../components/FormCreateTask'
import { Task } from '../components/Task'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/logo-rocket.svg"
          alt="Logo do to-do list"
          width={22}
          height={36}
        />

        <h1>
          to<span className={styles.secondaryColor}>do</span>
        </h1>
      </header>

      <FormCreateTask />

      <main className={styles.main}>
        <header>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span className={styles.numberTasksCreated}>0</span>
          </div>

          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <span className={styles.numberTasksDone}>0</span>
          </div>
        </header>

        <section className={styles.taskList}>
          <Task />
          <Task />
        </section>
      </main>
    </>
  )
}
