import { useLocation } from 'react-router-dom'

function Steps ({ number, text, route }: { number: number, text: string, route: string }): JSX.Element {
  const location = useLocation()

  return (
        <li className='flex gap-4 items-center'>
            {/* NUMBER */}
            <span className={`rounded-full border-2  px-4 py-2  font-bold
        ${location.pathname === route ? ' bg-[#BEE2FD] text-black ' : ''}`} >{number}</span>
            {/* STEP */}
            <div className='md:flex flex-col hidden '>
                <span className='text-[0.75rem] text-[#ABBCFF] uppercase'>STEP {number}</span>
                <strong className='text-[0.875rem] uppercase '>{text}</strong>
            </div>
        </li>
  )
}

export default Steps
