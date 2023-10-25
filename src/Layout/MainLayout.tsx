import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Steps from '../components1/Steps'
import { useEffect } from 'react'
import { validateInfo } from '../utils/ValidationsSchemas'
import { useSnapshot } from 'valtio'
import store from '../store/store'

function MainLayout (): JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()
  const snap = useSnapshot(store)
  const { infoFormData } = snap

  useEffect(() => {
    const validationResult = validateInfo(infoFormData)
    if (!validationResult.success && location.pathname !== '/') {
      navigate('/')
    }

    if (validationResult.success && location.pathname !== '/' && snap.selectedPlan.name === '') {
      navigate('/plans')
    }
  }, [navigate])

  return (
    <main className='bg-[#EFF5FF] h-screen w-full flex flex-col  md:justify-center items-center relative'>
      {/* WHOLE CONTAINER */}
      <div className='p-4 md:max-h-[600px] items-center w-full  lg:max-w-[940px] bg-white rounded-lg flex flex-col md:flex-row '>
        {/* SIDEBAR */}
        <nav className='flex justify-center md:block  absolute md:static top-0 w-full md:w-auto h-[200px] md:p-10 md:rounded-lg md:h-[568px] min-w-[275px]
                  bg-[url("/images/bg-sidebar-mobile.svg")] md:bg-[url("/images/bg-sidebar-desktop.svg")] bg-cover'>
          <ul className='flex flex-row md:flex-col gap-8 text-white justify-center md:mb-0 mb-10 '>
            <Steps route="/" number={1} text="your info" ></Steps>
            <Steps route="/plans" number={2} text="select plan" ></Steps>
            <Steps route="/addons" number={3} text="add-ons" ></Steps>
            <Steps route="/summary" number={4} text="summary" ></Steps>
          </ul>
        </nav>
        {/*  FORMS */}
        <div className=' min-h-max md:h-full w-[90%] absolute top-32 md:top-0 md:static bg-white rounded-lg md:rounded pb-2'>
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  )
}

export default MainLayout
