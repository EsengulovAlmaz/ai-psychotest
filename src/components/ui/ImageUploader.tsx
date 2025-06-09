import React, { forwardRef } from 'react'

import { Download, RefreshCw } from 'lucide-react'

interface Props {
  text: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploader: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ 
  text, 
  name,
  onChange,
}, ref) => {
  const [image, setImage] = React.useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    const file = e.target.files?.[0]

    if (file) {
      const url = URL.createObjectURL(file)
      setImage(url)
    }
  }
  
  return (
    <div className="inline-flex flex-col text-center gap-2">
      <div className="flex items-center justify-center relative bg-[#F6F6F8] rounded-[8px] w-[216px] h-[160px] overflow-hidden">
        <input
          id={name}
          name={name}
          type="file"
          className="hidden"
          accept="image/*"
          multiple={false}
          onChange={handleFileChange}
          ref={ref}
        />

        <label 
          htmlFor={name}
          className="absolute cursor-pointer inline-flex items-center bg-[#DAEDFD] rounded-[8px] p-3.5"
        >
          {image ? <RefreshCw size={36} /> : <Download size={36} />}
        </label>

        {image && (
          <img 
            src={image} 
            alt="preview" 
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <p className="text-[#293244]">
        {text}
      </p>
    </div>
  )
})
