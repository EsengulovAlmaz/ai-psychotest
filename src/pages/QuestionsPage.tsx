import React from 'react'
import { useForm } from 'react-hook-form'

import { CustomCalendar } from '../components/shared/CustomCalendar'
import { RadioGroup } from '../components/shared/RadioGroup'
import { Button, InputField, TextareaField, Title } from '../components/ui'

export const QuestionsPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm()
    
  return (
    <form
      className="flex flex-col gap-16"
    >
      <div className="flex flex-col gap-4">
        <Title className="mb-2">Общая информация о ребенке</Title>

        <InputField
          label="Имя ребенка"
          name="childName"
        />

        <CustomCalendar
          label="Дата рождения ребенка"
        />

        <RadioGroup
          label="Пол ребенка"
          options={['Мужской', 'Женский']}
          name="myRadio"
          register={register}
        />

        <InputField
          label="Имя родителя, заполняющего анкету"
          name="parentName"
        />
      </div>

      <div className="rounded-[8px] bg-[#FADEE0] p-6 text-sm text-[#293244]">
        <div>
          <p>
            Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.
          </p>
        </div>

        <div className="mt-4">
          <p>
            Все вопросы обязательны к заполнению
          </p>
        </div>
      </div>

      <div>
        <Title>Раздел 1. Эмоциональная сфера</Title>

        <div className="flex flex-col gap-8 mt-6">
          <RadioGroup
            label="Ребенок часто выражает радость и удовольствие:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок часто выражает радость и удовольствие:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок часто грустит или плачет без видимой причины:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок часто грустит или плачет без видимой причины:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />
        </div>
      </div>

      <div>
        <Title>Раздел 2. Социальное взаимодействие</Title>

        <div className="flex flex-col gap-8 mt-6">
          <RadioGroup
            label="Ребенок легко заводит друзей:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок легко заводит друзей:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок предпочитает играть один, а не с другими детьми:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок предпочитает играть один, а не с другими детьми:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />
        </div>
      </div>

      <div>
        <Title>Раздел 3. Саморегуляция и поведение</Title>

        <div className="flex flex-col gap-8 mt-6">
          <RadioGroup
            label="Ребенок умеет следовать правилам и инструкциям:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок умеет следовать правилам и инструкциям:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенку трудно контролировать свои импульсы:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенку трудно контролировать свои импульсы:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />
        </div>
      </div>

      <div>
        <Title>Раздел 4. Самооценка и уверенность в себе</Title>

        <div className="flex flex-col gap-8 mt-6">
          <RadioGroup
            label="Ребенок уверен в своих силах и способностях:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок уверен в своих силах и способностях:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок часто сомневается в себе:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />

          <RadioGroup
            label="Ребенок часто сомневается в себе:"
            options={['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда']}
            name="myRadio"
            register={register}
          />
        </div>
      </div>

      <div>
        <Title>Раздел 5. Общие вопросы</Title>

        <div className="flex flex-col gap-8 mt-6">
          <RadioGroup
            label="Как Вы оцениваете общее эмоциональное состояние вашего ребенка?"
            options={['Отличноe', 'Хорошее', 'Удовлетворительное', 'Неудовлетворительное', 'Очень плохое']}
            name="myRadio"
            register={register}
          />

          <TextareaField 
            label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
            {...register('additionalComments')}
            name="additionalComments"
          />

          <TextareaField 
            label="Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?"
            {...register('additionalComments')}
            name="additionalComments"
          />

          <TextareaField 
            label="Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?"
            {...register('additionalComments')}
            name="additionalComments"
          />

          <TextareaField 
            label="Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?"
            {...register('additionalComments')}
            name="additionalComments"
          />
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <p className="text-[#A0A9B8] text-sm font-bold">
          Шаг 2/3
        </p>

        <Button
          variant="default"
          type="submit"
          className="flex items-center gap-2 !px-6 bg-[#45A5F6] text-[#fff] hover:bg-[#007EE5] disabled:bg-[#4453711A] disabled:text-[#44537180]"
        >
          Далее
        </Button>
      </div>
    </form>
  )
}
