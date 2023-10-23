// INDIVIDUAL PLAN
function Plan ({ icon, name, price }: { icon: string, name: string, price: number }): JSX.Element {
  return (
      <div className='plan cursor-pointer flex md:flex-col  border  px-4 py-2 md:py-4 rounded-lg   gap-1 md:w-max pr-12 '>
        <img className='w-10 md:pb-6' src={icon} alt="" />
        <div className=' flex flex-col ml-6 md:ml-0'>
          <strong className='capitalize'>{name}</strong>
          <span className='text-[0.875rem] text-[#9699AA]'>${price}/mo</span>
          <span className='text-[0.75rem] font-bold '>2 months free</span>
        </div>
      </div>

  )
}

export default Plan
