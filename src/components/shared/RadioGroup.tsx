import React from 'react'
import type { UseFormRegister } from 'react-hook-form'

import { Radio } from '../ui'

import type { QuestionsSurveyTypes } from '../../types'

interface RadioGroupProps {
  options: string[]
  name: keyof QuestionsSurveyTypes
  label: string
  register: UseFormRegister<QuestionsSurveyTypes>
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
