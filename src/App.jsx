import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './mainlayout'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ErrorPage from './pages/error'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}