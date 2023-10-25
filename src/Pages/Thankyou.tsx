import { useEffect } from 'react'
import { actions } from '../store/store'

function Thankyou (): JSX.Element {
  useEffect(() => {
    actions.clearLocalStorage()
  }, [])

  return (
    <div className='absolute md:static bg-white flex flex-col px-8 justify-center h-[70vh] md:h-full text-center gap-4 items-center rounded-lg'>
      <img width="80px" src="images/icon-thank-you.svg" alt="checkmark icon"></img>
      <h1 className='text-[1.5rem] font-bold'>Thank you!</h1>
      <p className='text-[1rem] text-[#9699AA]'>Thanks for confirming your subscription!
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Thankyou
