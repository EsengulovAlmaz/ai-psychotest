import { useNavigate } from 'react-router-dom'

import { ArrowRight } from 'lucide-react'

import { Button, Title } from '../components/ui'

export const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-[80vh] flex items-center justify-center flex-col gap-4">
      <Title>ИИ-психодиагностика детей</Title>
      <Button
        variant="default"
        className="flex items-center gap-2 !px-20 bg-[#45A5F6] text-[#fff] hover:bg-[#007EE5]"
        onClick={() => navigate('/upload')}
      >
        Начать тест
        <ArrowRight size={20} />
      </Button>
    </div>
  )
}