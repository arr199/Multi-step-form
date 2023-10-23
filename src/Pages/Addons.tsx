import { Link, useNavigate } from 'react-router-dom'
import Addon from '../Components/Addon'

function Addons (): JSX.Element {
  const navigate = useNavigate()

  function handleNextStep (e: React.FormEvent): void {
    e.preventDefault()
    navigate('/summary')
  }

  return (
        <form onSubmit={handleNextStep} className="static flex flex-col text-[#022959] w-full px-2 sm:px-8  mt-8 [&>label]:text-[0.875rem]  h-full ">
            <h1 className="text-[2rem] font-bold">Pick add-ons</h1>
            <p className="text-[#9699AA] font-medium mb-8">Add-ons help enhance your gaming experience.</p>
            <div className='flex flex-col gap-4'>
                <Addon name="online service" description="Access to multiplayer games" price={1}></Addon>
                <Addon name="Larger storage" description="Extra 1TB of cloud save" price={2}></Addon>
                <Addon name="Customizable profile" description="Custom theme on your profile" price={2}></Addon>
            </div>
            {/* NEXT STEP | GO BACK BUTTONS */}
            <div className='bg-white flex  w-full px-8 md:px-0 justify-between items-center h-20 md:static fixed bottom-0 right-0 md:mb-10 md:mt-auto   '>
                <Link className='text-[#9699AA] hover:font-bold hover:text-black' to={'/plans'}>Go back</Link>
                <button className="next-button  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
            </div>
        </form>
  )
}

export default Addons
