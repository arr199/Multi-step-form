import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Info from './Pages/Info'
import Plans from './Pages/Plans'
import Addons from './Pages/Addons'
import Summary from './Pages/Summary'

function Router (): JSX.Element {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout></MainLayout>}>
            <Route index element={<Info></Info>} ></Route>
            <Route path='plans' element={<Plans></Plans>} ></Route>
            <Route path='addons' element={<Addons></Addons>} ></Route>
            <Route path='summary' element={<Summary></Summary>} ></Route>
    </Route>
  ))

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
