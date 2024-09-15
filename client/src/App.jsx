import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  const router = createBrowserRouter([
    {
      //Home route
      path: "/",
      element:
        <>
          <Navbar />
          <HomePage />
        </>
    },
    {
      // about route
      path: "/about",
      element:
        <>
          <Navbar />
          <About />
        </>
    },
    {
      //contact route
      path: "/contact",
      element:
        <>
          <Navbar />
          <Contact />
        </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
