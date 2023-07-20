'use client'

import {
  PostInfoContainer,
  PostInfoContent,
  PostInfoPresentation,
} from './styles'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoContent>
        <header>
          <Link href={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <Link href={'https://github.com/mateussantanasilva'} target="_blank">
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>

        <PostInfoPresentation>
          <h2>JavaScript data types and data structures</h2>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>mateussantanasilva</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </li>
          </ul>
        </PostInfoPresentation>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
