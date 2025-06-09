import React from 'react'

import { cn } from '../../lib/utils'

interface Props {
  label: string
  value: string
  name: string
}

export const Radio = React.forwardRef<HTMLInputElement, Props>(({ 
  label, 
  value, 
  name,
  ...rest
}, ref) => {
  return (
    <label className="flex items-center gap-1 cursor-pointer group">
      <input
        ref={ref}
        type="radio"
        name={name}
        value={value}
        className="sr-only peer"
        {...rest}
      />
      <span
        className={cn(
          'w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#D0D4DC] group-hover:bg-[#45A5F6] transition-colors duration-300',
          'peer-checked:bg-[#45A5F6] peer-hover:bg-[#007EE5]',
        )}
      >
        <span className="w-[6px] h-[6px] bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
      </span>
      <span className="text-xs font-normal">{label}</span>
    </label>
  )
},
)
