import React from 'react'
import { useLocation } from 'react-router-dom'

const pathProgressMap: Record<string, number> = {
  '/upload': 33,
  '/questions': 66,
  '/result': 100,
}

const ProgressLine: React.FC = () => {
  const location = useLocation()
  const progress = pathProgressMap[location.pathname] ?? 0

  return (
    <div className="fixed top-0 left-0 w-full h-4 bg-[#C7E4FC] z-50">
      <div
        className="h-full bg-[#45A5F6] transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressLine
