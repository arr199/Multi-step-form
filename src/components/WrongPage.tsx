import { Navigate } from 'react-router-dom'

function WrongPage (): JSX.Element {
  return <Navigate to="/"></Navigate>
}

export default WrongPage
