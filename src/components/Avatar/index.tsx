import styles from './Avatar.module.css'

interface Props {
  hasBorder?: boolean
  urlImage: string
}

export function Avatar({hasBorder = true, urlImage}: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={urlImage}
      alt="Foto de perfil"
    />
  )
}