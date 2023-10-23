import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import store, { actions } from '../Store/store'
import { validateInfo } from '../Utils/ValidationsSchemas'
import { useState } from 'react'

function Info (): JSX.Element {
  const navigate = useNavigate()
  const snap = useSnapshot(store)
  const [error, setError] = useState({ name: '', email: '', phone: '' })
  function handleNextStep (e: React.FormEvent): void {
    e.preventDefault()
    console.log(validateInfo(snap.infoFormData))
    if (!validateInfo(snap.infoFormData).success) {
      console.log('err')
    } else {
      navigate('/plans')
    }

    // navigate('/plans')
  }

  return (
    <form onSubmit={handleNextStep} className="static flex flex-col  w-full px-8  mt-8 [&>label]:text-[0.875rem]">
      <h1 className="text-[2rem] font-bold">Personal Info</h1>
      <p className="text-[#9699AA] font-medium mb-8">Please provide your name, email address, and phone number.</p>
      {/* NAME */}
      <label className="font-medium" htmlFor="">Name</label>
      <input value={snap.infoFormData.name} onChange={(e) => { actions.setName(e) } }
        placeholder='e.g. Stephen King'
        className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
      {/* EMAIL */}
      <label className="font-medium" htmlFor="">Email Address</label>
      <input value={snap.infoFormData.email} onChange={(e) => { actions.setEmail(e) } }
        placeholder='e.g. stephenking@lorem.com'
        className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
      {/* PHONE NUMBER */}
      <label className="font-medium" htmlFor="">Phone Number</label>
      <input value={snap.infoFormData.phone} onChange={(e) => { actions.setPhone(e) } }
        placeholder='e.g. +1 234 567 890'
        className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
      {/* NEXT STEP */}
      <div className=' flex w-full px-8 md:px-0 md:justify-end justify-end items-center  h-20 md:static fixed bottom-0 right-0 bg-white  '>
        <button
        className="next-button md:mt-10  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
      </div>
    </form>
  )
}

export default Info
