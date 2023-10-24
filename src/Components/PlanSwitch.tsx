import { PiToggleRightFill, PiToggleLeftFill } from 'react-icons/pi'
import { useSnapshot } from 'valtio'
import store, { actions } from '../Store/store'

function PlanSwitch (): JSX.Element {
  const snap = useSnapshot(store)
  return (
      <div className=' flex my-6 bg-[#F8F9FF] items-center gap-4 justify-center py-2 rounded-lg min-w-full'>
       {/* MONTHLY */}
        <span className={`font-bold   
        ${snap.billingPlan === 'monthly' ? ' text-[#022959] ' : ' text-[#9699AA]   '}`}>Monthly</span>
        <div onClick={() => { actions.setBillingPlan() }} >
          { snap.billingPlan === 'monthly'
            ? <PiToggleLeftFill className="w-6 h-6 cursor-pointer" ></PiToggleLeftFill>
            : <PiToggleRightFill className="w-6 h-6 cursor-pointer"></PiToggleRightFill>}
        </div>
        {/* YEARLY */}
        <span className={`font-bold   
        ${snap.billingPlan === 'yearly' ? ' text-[#022959] ' : ' text-[#9699AA]   '}`}>Yearly</span>
      </div>
  )
}

export default PlanSwitch
