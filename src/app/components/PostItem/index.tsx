import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostItemContainer } from './styles'

interface PostItemProps {
  id: number
  title: string
  body: string
  created_at: string
}

export function PostItem({ id, title, body, created_at }: PostItemProps) {
  const summaryTitle = title.substring(0, 50)
  const summaryContent = body.substring(0, 175).concat('...')

  const createdAtDistanceToNow = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostItemContainer>
      <Link href={`/post/${id}`}>
        <header>
          <h3>{summaryTitle}</h3>
          <span>{createdAtDistanceToNow}</span>
        </header>

        <ReactMarkdown>{summaryContent}</ReactMarkdown>
      </Link>
    </PostItemContainer>
  )
}
