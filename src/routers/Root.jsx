import React from 'react'
import Navbar from './../assets/components/Navbar';
import Footer from './../assets/components/Footer';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
