import React from 'react'

import { cn } from '../../lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export const Title: React.FC<Props>= ({ children, className }) => {
  return (
    <h2 className={cn('font-bold text-xl text-[#3A353E]', className)}>
      {children}
    </h2>
  )
}
