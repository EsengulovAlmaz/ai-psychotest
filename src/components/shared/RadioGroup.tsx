import React from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import { Radio } from '../ui'

interface RadioGroupProps {
  options: string[]
  name: string
  label: string
  register: (name: string) => UseFormRegisterReturn
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, label, register }) => {
  return (
    <div>
      <p className="text-[#293244]">{label}</p>
      
      <div className="flex gap-6 mt-2">
        {options.map((option) => {
          const { ref, ...rest } = register(name)
          return (
            <Radio
              key={option}
              label={option}
              value={option}
              ref={ref}
              {...rest}
              name={name}
            />
          )
        })}
      </div>
    </div>
  )
}
