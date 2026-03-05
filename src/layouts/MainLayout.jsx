import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'


function MainLayout() {
  
  return (
    <>
    <NavBar />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout