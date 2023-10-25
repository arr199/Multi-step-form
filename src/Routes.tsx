import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Info from './pages/Info'
import Plans from './pages/Plans'
import Addons from './pages/Addons'
import Summary from './pages/Summary'
import WrongPage from './components/WrongPage'

function Router (): JSX.Element {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout></MainLayout>}>
            <Route index element={<Info></Info>} ></Route>
            <Route path='plans' element={<Plans></Plans>} ></Route>
            <Route path='addons' element={<Addons></Addons>} ></Route>
            <Route path='summary' element={<Summary></Summary>} ></Route>
            <Route path='*' element={<WrongPage></WrongPage>}></Route>

    </Route>

  ))

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
