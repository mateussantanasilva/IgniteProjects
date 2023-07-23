import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostList } from './components/PostList'

export default function Home() {
  return (
    <main>
      <Profile />

      <SearchForm />

      <PostList />
    </main>
  )
}
