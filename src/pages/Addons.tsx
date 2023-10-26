import { Link, useNavigate } from 'react-router-dom'
import Addon from '../components/Addon'
import API from '../utils/API'

function Addons (): JSX.Element {
  const navigate = useNavigate()

  function handleNextStep (e: React.FormEvent): void {
    e.preventDefault()
    navigate('/summary')
  }

  return (
    <form onSubmit={handleNextStep} className="static flex flex-col text-[#022959] w-full px-4 sm:px-8  mt-8 [&>label]:text-[0.875rem]  h-full ">
      <h1 className="text-[2rem] font-bold">Pick add-ons</h1>
      <p className="text-[#9699AA] font-medium mb-8">Add-ons help enhance your gaming experience.</p>
      <div className='flex flex-col gap-4'>
        {API.ADDONS.map((addon, index) => <Addon index={index} key={addon.name} name={addon.name} description={addon.description} price={addon.price}></Addon>)}
      </div>
      {/* GO BACK | NEXT STEP BUTTONS */}
      <div className='bg-white flex  w-full px-8 md:px-0 justify-between items-center h-20 md:static fixed bottom-0 right-0 md:mb-10 md:mt-auto   '>
        <Link className='text-[#9699AA] hover:font-bold hover:text-black' to={'/plans'}>Go back</Link>
        <button className="next-button  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
      </div>
    </form>
  )
}

export default Addons
