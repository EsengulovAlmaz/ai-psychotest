import React from 'react'

import { cn } from '../../lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
      {children}
    </div>
  )
}
