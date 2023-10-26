import { Link, useNavigate } from 'react-router-dom'
import Plan from '../components/Plan'
import PlanSwitch from '../components/PlanSwitch'
import API from '../utils/API'
import { useSnapshot } from 'valtio'
import store from '../store/store'

function Plans (): JSX.Element {
  const navigate = useNavigate()
  const snap = useSnapshot(store)

  function handleNextStep (e: React.FormEvent): void {
    e.preventDefault()
    navigate('/addons')
  }

  return (
    <form onSubmit={handleNextStep} className="static w-[80%]  flex mx-auto  flex-col  pb-4 mt-4 md:mt-8 [&>label]:text-[0.875rem] h-full ">
      <h1 className="md:text-[2rem] text-[1.425rem] font-bold">Select your plan</h1>
      <p className="text-[#9699AA] font-medium mb-8">You have the option of monthly or yearly billing.</p>
      {/* PLANS CONTAINER */}
      <div className='md:flex-row  justify-between flex-col flex  gap-2 md:gap-4 '>
        {API.BILLING_PLANS.map((plan) =>
          <Plan key={plan.name} name={plan.name} icon={plan.icon} price={plan.price} ></Plan>)}
      </div>
      <PlanSwitch></PlanSwitch>
      {/* GO BACK | NEXT STEP BUTTONS */}
      <div className='bg-white flex  w-full px-8 md:px-0 justify-between items-center  h-20 md:static fixed bottom-0 right-0 md:mb-10 md:mt-auto  '>
        <Link className='text-[#9699AA] hover:font-bold hover:text-black' to={'/'}>Go back</Link>
        <button disabled={snap.selectedPlan.name === ''}
          className="next-button  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
      </div>
    </form>
  )
}
export default Plans
