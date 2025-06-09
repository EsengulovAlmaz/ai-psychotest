import { forwardRef } from 'react'
import { type FieldError } from 'react-hook-form'

type Props = {
  label?: string
  name: string
  placeholder?: string
  error?: FieldError
}

export const TextareaField = forwardRef<HTMLTextAreaElement, Props>(({
  label,
  name,
  error,
  placeholder = '',
  ...rest
}, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[#293244] cursor-pointer">
        {label}
      </label>

      <textarea
        id={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className="w-full min-h-[120px] resize-none px-3 py-[10px] text-sm text-[#293244] border rounded-md border-[#A0A9B8] outline-none
          hover:border-[#6447CF] focus:border-[#6447CF] not-placeholder-shown:border-[#6447CF]"
      />

      {error && (
        <p className="text-[#ef4444] text-sm mt-1">{error.message}</p>
      )}
    </div>
  )
},
)