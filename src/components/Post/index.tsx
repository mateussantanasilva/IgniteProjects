import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'

export interface Author {
  avatarUrl: string
  name: string
  occupation: string
}
export interface Content {
  id: number
  type: 'paragraph' | 'link'
  content: string
}
export interface Post {
  id?: number
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: Post) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  const [comments, setComments] = useState<string[]>([]) // var and function = (initial value)
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([...comments, newCommentText]) // spread operator copy existing value
    setNewCommentText('')
  }
  function handleChangeNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }
  function deleteComment(commentToDelete: string) {
    const commetsWithoutCommentDeleted = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commetsWithoutCommentDeleted)
  }

  const textAreaIsEmpty = newCommentText.length === 0 // run every time render

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt='Foto de perfil'
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.occupation}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <section className={styles.content}>
        {
          content.map(line => {
            const paragraphLine = <p key={line.id}>{line.content}</p>
            const linkLine = <p key={line.id}><a href=''>{line.content}</a></p>

            return line.type === 'paragraph' ? paragraphLine : linkLine
          })
        }
      </section>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Escreva um comentário...'
          value={newCommentText}
          onChange={handleChangeNewComment}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <div className={styles.hiddenBtn}>
          <button type='submit' disabled={textAreaIsEmpty}>
            Publicar
          </button>
        </div>
      </form>

      <section className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </section>
    </article>
  )
}