import Image from 'next/image'

import styles from './ListWithoutTask.module.css'

export function ListWithoutTask() {
  return (
    <section className={styles.withoutTask}>
      <Image
        src="/clipboard-without-task.svg"
        alt="Imagem indicando que não possui tarefas"
        width={56}
        height={56}
      />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  )
}
