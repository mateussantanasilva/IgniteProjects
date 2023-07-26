'use client'

import { PostsContext } from '@/contexts/PostsContext'
import { useContextSelector } from 'use-context-selector'
import { SearchFormContainer, SearchFormContent } from './styles'
import { ChangeEvent } from 'react'

export function SearchForm() {
  const { searchPosts, posts } = useContextSelector(PostsContext, (context) => {
    return { searchPosts: context.searchPosts, posts: context.posts }
  })

  const amountPosts = posts.length

  function handleSearchPost(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value

    if (inputValue === '') return

    const userAgent = process.env.NEXT_PUBLIC_USER_AGENT
    const repository = process.env.NEXT_PUBLIC_REPOSITORY

    const query = `${inputValue}repo:${userAgent}/${repository}`

    searchPosts(query)
  }

  return (
    <SearchFormContainer>
      <SearchFormContent>
        <header>
          <strong>Publicações</strong>
          <span>{`${amountPosts} publicações`}</span>
        </header>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearchPost}
        />
      </SearchFormContent>
    </SearchFormContainer>
  )
}
