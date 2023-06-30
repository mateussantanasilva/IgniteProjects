import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar urlImage='https://randomuser.me/api/portraits/women/90.jpg' />

          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time title='29 de Junho às 17:20h' dateTime='2023-06-29 17:20:00'>Publicado há 1h</time>
      </header>

      <section className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href=''>{' '}tai.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </section>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Escreva um comentário...' />

        <div className={styles.hiddenBtn}>
          <button type='submit'>Publicar</button>
        </div>
      </form>

      <section className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </section>
    </article>
  )
}