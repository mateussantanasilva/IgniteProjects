'use client'

import { Post, usePosts } from '@/hooks/usePosts'
import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'

interface PostsProviderProps {
  children: ReactNode
}

interface PostsContextType {
  posts: Post[]
  searchPosts: (filterQuery: string) => void
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const { posts = [], searchPosts } = usePosts()

  return (
    <PostsContext.Provider value={{ posts, searchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
