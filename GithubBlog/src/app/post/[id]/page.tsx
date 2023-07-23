'use client'

import ReactMarkdown from 'react-markdown'
import { Post } from '@/hooks/usePosts'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { apiGithub } from '@/libs/axios'
import { useQuery } from 'react-query'
import { formatDate } from '@/libs/formatDate'
import {
  PostContent,
  PostInfoContainer,
  PostInfoContent,
  PostInfoPresentation,
} from './styles'

interface PostProps {
  params: {
    id: string
  }
}

export default function Post({ params }: PostProps) {
  const { data: currentPost } = useQuery<Post>('currentPostKey', async () => {
    const userAgent = process.env.NEXT_PUBLIC_USER_AGENT
    const repository = process.env.NEXT_PUBLIC_REPOSITORY

    const response = await apiGithub.get(
      `/repos/${userAgent}/${repository}/issues/${params.id}`,
    )

    return response.data
  })

  if (!currentPost) return

  const createdAtDistanceToNow = formatDate(currentPost.created_at)

  const hasOnlyOneComment = currentPost.comments === 1

  return (
    <main>
      <PostInfoContainer>
        <PostInfoContent>
          <header>
            <Link href={'/'}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </Link>

            <Link href={currentPost.html_url} target="_blank">
              <span>Ver no github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </header>

          <PostInfoPresentation>
            <h2>{currentPost.title}</h2>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>{currentPost.user.login}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>{createdAtDistanceToNow}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
                <span>
                  {hasOnlyOneComment
                    ? `${currentPost.comments} comentário`
                    : `${currentPost.comments} comentários`}
                </span>
              </li>
            </ul>
          </PostInfoPresentation>
        </PostInfoContent>
      </PostInfoContainer>

      <PostContent>
        <ReactMarkdown>{currentPost.body}</ReactMarkdown>
      </PostContent>
    </main>
  )
}
