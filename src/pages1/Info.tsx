import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import store, { actions } from '../store1/store'
import { validateInfo } from '../utils1/ValidationsSchemas'
import { useEffect, useState } from 'react'
import InfoInput from '../components/InfoInputs'

function Info (): JSX.Element {
  const navigate = useNavigate()
  const snap = useSnapshot(store)
  const { infoFormData } = snap
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

  useEffect(() => {
    localStorage.setItem('infoFormData', JSON.stringify(snap.infoFormData))
  }, [infoFormData])

  return (
    <form onChange={() => { setError({ name: '', email: '', phone: '' }) }} onSubmit={handleNextStep} className="static flex flex-col  w-full px-8  mt-8 [&>label]:text-[0.875rem]">
      <h1 className="text-[2rem] font-bold">Personal Info</h1>
      <p className="text-[#9699AA] font-medium mb-8">Please provide your name, email address, and phone number.</p>
      <InfoInput name="name" value={snap.infoFormData.name} setValue={actions.setName} error={error.name} />
      <InfoInput name="email" value={snap.infoFormData.email} setValue={actions.setEmail} error={error.email} />
      <InfoInput name="phone" value={snap.infoFormData.phone} setValue={actions.setPhone} error={error.phone} />
      <div className=' flex w-full px-8 md:px-0 md:justify-end justify-end items-center  h-20 md:static fixed bottom-0 right-0 bg-white  '>
        <button
          className="next-button md:mt-10  px-4 py-2 bg-[#164A8A] rounded-lg text-white">Next Step</button>
      </div>
    </form>
  )
}

export default Info
