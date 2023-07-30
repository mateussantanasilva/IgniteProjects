'use client'

import { ReactNode } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'

interface ServerStylesheetProps {
  children: ReactNode
}

globalStyles() // avoid unnecessary rendering

export function ServerStylesheet({ children }: ServerStylesheetProps) {
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      )
    }
  })

  return <>{children}</>
}
