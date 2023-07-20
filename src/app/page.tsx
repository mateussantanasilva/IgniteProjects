'use client'

import { Profile } from '@/components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostItem } from './components/PostItem'
import { PostList } from './styles'

export default function Home() {
  return (
    <main>
      <Profile />

      <SearchForm />

      <PostList>
        <PostItem />
        <PostItem />
        <PostItem />
      </PostList>
    </main>
  )
}
