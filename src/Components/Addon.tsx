import { useSnapshot } from 'valtio'
import store, { actions } from '../store/store'

function Addon ({ name, description, price, index }: { name: string, description: string, price: number, index: number }): JSX.Element {
  const snap = useSnapshot(store)
  const { billingPlan } = snap

  return (
          <div style={{ background: snap.addons[index].selected ? ' #F8F9FF ' : '' }} className='addon  flex items-center w-full px-4 py-4 rounded-lg border'>
             { snap.addons[index].selected
               ? <label htmlFor={name} className='border-2   min-w-[25px] min-h-[25px]  flex items-center justify-center  rounded cursor-pointer bg-[#483EFF]'>
                    <img width="15px" src="/images/icon-checkmark.svg" alt="" />
                 </label>
               : <label htmlFor={name} className='border-2   min-w-[25px] min-h-[25px]  rounded cursor-pointer '></label>
              }
              <input checked={snap.addons[index].selected} onChange={() => { actions.setAddons(index) } }
               id={name} type="checkbox" className='accent-violet-500 invisible' />
               <div className='flex flex-col'>
                  <span className='font-bold capitalize'>{name}</span>
                  <span className=' capitalize text-[0.9375rem] text-[#9699AA]'>{description}</span>
               </div>
               <span className='ml-auto text-[0.875rem] text-[#483EFF]'>
                  {billingPlan === 'monthly' ? `$${price}/mo` : `$${price * 10}/yr`}
               </span>
          </div>
  )
}

export default Addon
