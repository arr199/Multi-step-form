function InfoInput ({ value, error, setValue, name }: InfoInputProps): JSX.Element {
  return (
    <div className='flex flex-col relative'>
      <label className="font-medium capitalize" >{name}</label>
      <input value={value} onChange={(e) => { setValue(e) }}
        placeholder='e.g. Stephen King'
        className="form-input  mb-8 mt-1 px-4 py-2 bg-transparent border-[#D6D9E6] border-2 rounded-lg" type="text" />
      <p className='text-red-500 text-[0.875rem] absolute right-0 bottom-0'>{error}</p>
    </div>
  )
}

export default InfoInput
