import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface Comment {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: Comment) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount(previusState => { return previusState + 1 })
  }

  const showLikeCount = likeCount > 0 && <span>{likeCount}</span>

  return (
    <section className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://randomuser.me/api/portraits/women/63.jpg'
        alt='Foto de perfil'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cate Blanchett</strong>
              <time title='29 de Junho às 20:50h' dateTime='2023-06-29 20:50:00'>Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'
            >
              <Trash size={'1.5rem'} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={'1.25rem'} />
            Curtir {showLikeCount}
          </button>
        </footer>
      </div>
    </section>
  )
}