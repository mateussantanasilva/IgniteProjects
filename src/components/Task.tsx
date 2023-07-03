'use client'

import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task() {
  return (
    <article className={styles.task}>
      <input type="checkbox" name="isDone" id="isDone" />
      <label className={styles.checkbox} htmlFor="isDone">
        <Check weight="bold" size={'.7rem'} />
      </label>

      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button className={styles.deleteTask}>
        <Trash size={'1.1rem'} />
      </button>
    </article>
  )
}
