import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, Post as PostInterface } from './components/Post'

import styles from './App.module.css'
import './global.css'

export function App() {
  const posts: PostInterface[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://randomuser.me/api/portraits/women/90.jpg',
        name: 'Jane Cooper',
        occupation: 'Dev Front-End'
      },
      content: [
        { id: 1, type: 'paragraph', content: 'Fala galeraa 👋' },
        { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { id: 3, type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishedAt: new Date('2023-06-30T13:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://randomuser.me/api/portraits/women/63.jpg',
        name: 'Cate Blanchett',
        occupation: 'Dev Mobile'
      },
      content: [
        { id: 1, type: 'paragraph', content: 'Fala galeraa 👋' },
        { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { id: 3, type: 'link', content: 'cate.design/doctorcare' }
      ],
      publishedAt: new Date('2023-06-23T13:00:00')
    }
  ]

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
