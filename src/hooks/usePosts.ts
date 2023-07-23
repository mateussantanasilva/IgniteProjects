import { useState } from 'react'
import { useQuery } from 'react-query'
import { apiGithub } from '@/libs/axios'

export interface Post {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function usePosts(customQuery?: string) {
  const userAgent = process.env.NEXT_PUBLIC_USER_AGENT
  const repository = process.env.NEXT_PUBLIC_REPOSITORY

  const defaultQuery = `repo:${userAgent}/${repository}`

  const [query, setQuery] = useState(customQuery || defaultQuery)

  // refetch if query state changes
  const { data: posts } = useQuery<Post[]>([query], async () => {
    const response = await apiGithub.get(`/search/issues`, {
      params: {
        q: query,
      },
    })

    return response.data.items
  })

  const searchPosts = (filterQuery: string) => {
    setQuery(filterQuery)
  }

  return { posts, searchPosts }
}
