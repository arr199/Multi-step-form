import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import store, { actions } from '../Store/store'
import { validateInfo } from '../Utils/ValidationsSchemas'
import { useState } from 'react'

function Info (): JSX.Element {
  const navigate = useNavigate()
  const snap = useSnapshot(store)
  const [error, setError] = useState<Record<string, string>>({ name: '', email: '', phone: '' })

  function handleNextStep (e: React.FormEvent): void {
    e.preventDefault()
    const validationResult = validateInfo(snap.infoFormData)
    if (!validationResult.success) {
      //  GET ALL THE ERROR MESSAGE
      const errors = validationResult.error.issues.reduce<Record<string, string>>((acc, curr) => {
        if (!(curr.path[0] in acc)) {
          acc[curr.path[0]] = curr.message
        }
        return acc
      }, {})

      setError(errors)
    } else {
      navigate('/plans')
    }
  }

  return (
    <form onChange={() => { setError({ name: '', email: '', phone: '' }) } } onSubmit={handleNextStep} className="static flex flex-col  w-full px-8  mt-8 [&>label]:text-[0.875rem]">
      <h1 className="text-[2rem] font-bold">Personal Info</h1>
      <p className="text-[#9699AA] font-medium mb-8">Please provide your name, email address, and phone number.</p>
      {/* NAME */}
      <div className='flex flex-col relative'>
        <label className="font-medium" htmlFor="">Name </label>
        <input value={snap.infoFormData.name} onChange={(e) => { actions.setName(e) } }
          placeholder='e.g. Stephen King'
          className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
         <p className='text-red-500 text-[0.875rem] absolute right-0 bottom-0'>{error.name}</p>
      </div>
      {/* EMAIL */}
      <div className='flex flex-col relative'>
        <label className="font-medium" htmlFor="">Email Address</label>
        <input value={snap.infoFormData.email} onChange={(e) => { actions.setEmail(e) } }
          placeholder='e.g. stephenking@lorem.com'
          className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" />
        <p className='text-red-500 text-[0.875rem] absolute right-0 bottom-0'>{error.email}</p>
      </div>
      {/* PHONE NUMBER */}
      <div className='flex flex-col relative'>
        <label className="font-medium" htmlFor="">Phone Number</label>
        <input value={snap.infoFormData.phone} onChange={(e) => { actions.setPhone(e) } }
          placeholder='e.g. +1234567890'
          className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
        <p className='text-red-500 text-[0.875rem] absolute right-0 bottom-0'>{error.phone}</p>
      </div>
      {/* NEXT STEP */}
      <div className=' flex w-full px-8 md:px-0 md:justify-end justify-end items-center  h-20 md:static fixed bottom-0 right-0 bg-white  '>
        <button
        className="next-button md:mt-10  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
      </div>
    </form>
  )
}

export default Info
