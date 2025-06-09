import { forwardRef } from 'react'
import { type FieldError } from 'react-hook-form'

type Props = {
  label?: string
  name: string
  placeholder?: string
  type?: string
  error?: FieldError
}

export const InputField = forwardRef<HTMLInputElement, Props>(({
  label,
  name,
  type = 'text',
  error,
  placeholder = '',
  ...rest
}, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-[#293244] cursor-pointer">
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className="w-full px-3 py-[10px] border border-[#A0A9B8] rounded-md text-sm text-[#293244] hover:border-[#6447CF] outline-none focus:border-[#6447CF] not-placeholder-shown:border-[#6447CF]"
      />

      {error && (
        <p className="text-[#ef4444] text-sm mt-1">{error.message}</p>
      )}
    </div>
  )
},
)