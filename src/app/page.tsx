'use client'

import { Profile } from '@/components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostItem } from './components/PostItem'
import { PostList } from './styles'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '@/contexts/PostsContext'

export default function Home() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <main>
      <Profile />

      <SearchForm />

      <PostList>
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
      </PostList>
    </main>
  )
}
