import { PiToggleRightFill, PiToggleLeftFill } from 'react-icons/pi'

function PlanSwitch (): JSX.Element {
  return (
      <div className='flex my-6 bg-[#F8F9FF] items-center gap-4 justify-center py-2 rounded-lg min-w-full'>
        <span>Monthly</span>
        <PiToggleLeftFill className="w-6 h-6 cursor-pointer" ></PiToggleLeftFill>
        <span>Yearly</span>
      </div>
  )
}

export default PlanSwitch
