import { useSnapshot } from 'valtio'
import store, { actions } from '../store/store'

// INDIVIDUAL PLAN
function Plan ({ icon, name, price }: { icon: string, name: string, price: number }): JSX.Element {
  const snap = useSnapshot(store)

  return (
    <div onClick={() => { actions.setPlan({ name, price }) }}
      className={`plan cursor-pointer flex md:flex-col h-[80px] md:h-[160px] border  px-4 py-2 md:py-4 rounded-lg   gap-1 md:w-[130px] pr-12 
      ${snap.selectedPlan.name === name ? ' bg-[#e7eafd] border-[1px] border-[#483EFF] ' : ''} `} >
      <img className='w-10 md:pb-6' src={icon} alt="plan logo" />
      <div className=' flex flex-col ml-6 md:ml-0'>
        <strong className='capitalize'>{name}</strong>
        {/* PRICE */}
        <span className='text-[0.875rem] text-[#9699AA]'>$
          {snap.billingPlan === 'monthly' ? `${price}/mo` : `${price * 10}/yr`}
          {/* PROMOTION */}
        </span>
        {snap.billingPlan === 'yearly' && <span className='text-[0.75rem] font-bold  whitespace-nowrap'>2 months free
        </span>}
      </div>
    </div>
  )
}

export default Plan
