'use client'

import { PostsContext } from '@/contexts/PostsContext'
import { useContextSelector } from 'use-context-selector'
import { PostItem } from '../PostItem'
import { PostListContainer } from './styles'

export function PostList() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <PostListContainer>
      {posts.map((post) => {
        return (
          <PostItem
            key={post.number}
            id={post.number}
            title={post.title}
            body={post.body}
            created_at={post.created_at}
          />
        )
      })}
    </PostListContainer>
  )
}
