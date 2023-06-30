import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <section className={styles.comment}>
      <Avatar hasBorder={false} urlImage='https://randomuser.me/api/portraits/women/63.jpg' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cate Blanchett</strong>
              <time title='29 de Junho às 20:50h' dateTime='2023-06-29 20:50:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={'1.5rem'} />
            </button>
          </header>

          <p>Muito bom Jane, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={'1.25rem'} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </section>
  )
}