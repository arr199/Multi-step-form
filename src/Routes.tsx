import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Info from './pages/Info'
import Plans from './pages/Plans'
import Addons from './pages/Addons'
import Summary from './pages/Summary'
import WrongPage from './components/WrongPage'
import Thankyou from './pages/Thankyou'
import { thankYouPageloader } from './utils/Loaders'
import store from './store/store'
import { useSnapshot } from 'valtio'

function Router (): JSX.Element {
  const snap = useSnapshot(store)
  const { showThankYouPage } = snap

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout></MainLayout>}>
            <Route index element={<Info></Info>} ></Route>
            <Route path='plans' element={<Plans></Plans>} ></Route>
            <Route path='addons' element={<Addons></Addons>} ></Route>
            <Route path='summary' element={<Summary></Summary>} ></Route>
            <Route path='thankyou' element={<Thankyou></Thankyou>} loader={ () => thankYouPageloader(showThankYouPage)} ></Route>
            <Route path='*' element={<WrongPage></WrongPage>}></Route>
    </Route>

  ))
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
