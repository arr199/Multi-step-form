import { useState } from 'react'

function Addon ({ name, description, price }: { name: string, description: string, price: number }): JSX.Element {
  const [formData, setFormData] = useState({ value: false })

  return (
          <div style={{ background: formData.value ? ' #F8F9FF ' : '' }} className='addon flex items-center w-full px-4 py-4 rounded-lg gap-2 border'>
             { formData.value
               ? <label htmlFor={name} className='border-2   min-w-[25px] min-h-[25px]  flex items-center justify-center  rounded cursor-pointer bg-[#483EFF]'>
                    <img width="15px" src="/images/icon-checkmark.svg" alt="" />
                 </label>
               : <label htmlFor={name} className='border-2   min-w-[25px] min-h-[25px]  rounded cursor-pointer '></label>
              }

              <input checked={formData.value} onChange={(e) => { setFormData({ ...formData, value: e.target.checked }) } }
               id={name} type="checkbox" className='accent-violet-500 invisible' />
               <div className='flex flex-col'>
                  <span className='font-bold capitalize'>{name}</span>
                  <span className=' capitalize text-[0.9375rem] text-[#9699AA]'>{description}</span>
               </div>
               <span className='ml-auto text-[0.875rem] text-[#483EFF]'>+${price}/mo</span>
          </div>

  )
}

export default Addon
