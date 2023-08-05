import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'
import Office from './Pages/Office'
import Services from './Pages/Services'
import Partners from './Pages/Partners'
import Contact from './Pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="office" element={<Office />} />
      <Route path="services" element={<Services />} />
      <Route path="partners" element={<Partners />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

