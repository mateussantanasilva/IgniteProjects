import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo-rocket.svg"
        alt="Logo do to-do list"
        width={22}
        height={36}
      />

      <h1>
        to<span className={styles.secondaryColor}>do</span>
      </h1>
    </header>
  )
}
