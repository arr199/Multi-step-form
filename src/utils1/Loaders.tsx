import { redirect } from 'react-router-dom'

export function thankYouPageloader (show: boolean): null | Response {
  if (!show) {
    return redirect('/')
  }

  return null
}
