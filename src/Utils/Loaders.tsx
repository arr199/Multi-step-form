import { redirect } from 'react-router-dom'

export function thankYouPageloader (show: boolean): null | any {
  if (!show) {
    return redirect('/')
  }

  return null
}
