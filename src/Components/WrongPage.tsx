import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function WrongPage (): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])
  return <div className="bg-white absolute inset-0"></div>
}

export default WrongPage
