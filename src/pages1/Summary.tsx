import { Link, useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import store, { actions } from '../store1/store'
import React, { useEffect } from 'react'
import { validateInfo } from '../utils1/ValidationsSchemas'

function Summary (): JSX.Element {
  const snap = useSnapshot(store)
  const navigate = useNavigate()
  const { billingPlan, showThankYouPage } = snap
  const selectedAddons = snap.addons.filter((addon) => addon.selected) ?? []

  function handleConfirm (e: React.FormEvent): void {
    e.preventDefault()
    actions.showThankYouPage()
  }

  useEffect(() => {
    localStorage.setItem('billingPlan', JSON.stringify(snap.billingPlan))
  }, [billingPlan])

  //   GO TO THANK YOU PAGE AFTER THE STATE CHANGES
  useEffect(() => {
    if (!showThankYouPage) return
    navigate('/thankyou')
  }, [showThankYouPage])

  return (
    <>
    <form onSubmit={handleConfirm} className="flex flex-col  w-full  px-4 md:px-8  mt-8 [&>label]:text-[0.875rem]  h-full ">
        <h1 className="text-[2rem] font-bold">Finishing up</h1>
        <p className="text-[#9699AA] font-medium mb-8">Double-check everything looks OK before confirming.</p>
        {/* PLAN | ADDONS CONTAINER */}
        <div className='bg-[#F8F9FF] p-4 rounded'>
            <div className='flex  relative items-center justify-between '>
                <div className='flex flex-col gap-2'>
                    {/* NAME */}
                    <strong className='capitalize'>{snap.selectedPlan.name} ({snap.billingPlan})</strong>
                    {/* CHANGE */}
                    <button type='button' onClick={() => {
                      actions.setBillingPlan()
                    }}
                        className='self-start text-[#9699AA] underline underline-offset-4 decoration-2 text-[0.875rem] hover:text-[#483EFF] hover:font-bold focus:text-[#483EFF]' >Change</button>
                </div>
                {/* PRICE */}
                <span className='text-[0.875rem] text-[#022959] font-bold '>$
                    {snap.billingPlan === 'monthly' ? `${snap.selectedPlan.price}/mo` : `${snap.selectedPlan.price * 10}/yr`}
                </span>
            </div>
            <hr className=' my-8' />
            {/* ADDONS */}
            <div className='flex flex-col gap-4'>
                {selectedAddons.map((addon) =>
                    <div className='flex justify-between' key={addon.name}>
                        {/* NAME */}
                        <span className='capitalize text-[#9699AA] text-[0.875rem]'>{addon.name}</span>
                        {/* PRICE */}
                        <span className='text-[0.875rem] text-[#022959] '>+$
                            {snap.billingPlan === 'monthly' ? `${addon.price}/mo` : `${addon.price * 10}/yr`}
                        </span>
                    </div>
                )}
            </div>
        </div>
        {/* TOTAL */}
        <div className='flex justify-between mt-4 p-4'>
            <span className='text-[#9699AA] text-[0.875rem]'>Total  (per {snap.billingPlan === 'monthly' ? 'month' : 'year'})</span>
            <span className=' font-bold  text-[1.25rem] text-[#483EFF]'>
                +${snap.billingPlan === 'monthly'
              ? `${snap.selectedPlan.price + selectedAddons.reduce((acc, addon) => acc + addon.price, 0)}/mo`
              : `${(snap.selectedPlan.price + selectedAddons.reduce((acc, addon) => acc + addon.price, 0)) * 10}/yr`}
            </span>
        </div>
        {/* GO BACK | CONFIRM */}
        <div className='bg-white flex  w-full px-8 md:px-0 justify-between items-center  h-20 md:static fixed bottom-0 right-0 md:mb-8 md:mt-auto   '>
            <Link className='text-[#9699AA] hover:font-bold hover:text-black' to={'/addons'}>Go back</Link>
            <button disabled={snap.selectedPlan.name === '' || !validateInfo(snap.infoFormData).success}
                className="next-button  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Confirm
            </button>
        </div>
    </form>
    </>
  )
}

export default Summary
