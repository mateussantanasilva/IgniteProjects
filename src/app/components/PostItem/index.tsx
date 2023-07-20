import Link from 'next/link'
import { PostItemContainer } from './styles'

export function PostItem() {
  return (
    <PostItemContainer>
      <Link href={'/post'}>
        <header>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </header>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in..
        </p>
      </Link>
    </PostItemContainer>
  )
}
