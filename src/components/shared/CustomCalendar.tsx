import React from 'react'

import { cn } from '../../lib/utils'
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '../ui'

interface Props {
  label: string
}

export const CustomCalendar: React.FC<Props> = ({ label }) => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="inline-flex flex-col gap-1">
      <label htmlFor="date" className="text-[#293244] cursor-pointer">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={cn('w-[89px] h-10 text-[#44537180] border-[#A0A9B8] cursor-pointer', 
              (date || open) && 'border-[#6447CF] text-[#293244] bg-[#fff]')}
          >
            {date ? date.toLocaleDateString() : '28.07.1986'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
