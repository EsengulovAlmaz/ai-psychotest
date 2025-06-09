import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ArrowRight, CircleAlert } from 'lucide-react'

import { Button, ImageUploader, Title } from '../components/ui'
import { setTaskId } from '../store/slices/taskSlice'

import type { ImagesTypes } from '../types'

export const UploadPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ImagesTypes>({
    mode: 'onChange',
  })

  const onSubmit = async (data: ImagesTypes) => {
    const formData = new FormData()
    formData.append('files', data.image[0])
    formData.append('files', data.image2[0])
    formData.append('files', data.image3[0])

    try {
      const response = await fetch('https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        dispatch(setTaskId(result.task_id))
        navigate('/questions')
      } else {
        console.error('Ошибка при загрузке:', result)
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error)
    }
  }

  return (
    <div>
      <Title>Загрузите фотографии рисунков</Title>

      <div className="inline-flex items-center gap-2 text-[#E12828] py-2 px-3 bg-[#FDEEEF] rounded-[100px] mt-2">
        <CircleAlert size={16} />
        <p className="font-normal text-sm">
          Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between mt-16">
          <ImageUploader 
            text="Дом, дерево, человек"
            {...register('image', { required: true })}
            name="image"
          />
          <ImageUploader 
            text="Несуществующее животное"
            {...register('image2', { required: true })}
            name="image2"
          />
          <ImageUploader 
            text="Автопортрет"
            {...register('image3', { required: true })}
            name="image3"
          />
        </div>

        <div className="flex items-center justify-between mt-16">
          <p className="text-[#A0A9B8] text-sm font-bold">
            Шаг 1/3
          </p>

          <Button 
            variant="default"
            type="submit"
            disabled={!isValid}
            className="flex items-center gap-2 !px-6 bg-[#45A5F6] text-[#fff] hover:bg-[#007EE5] disabled:bg-[#4453711A] disabled:text-[#44537180]"
          >
            Далее
            <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  )
}
