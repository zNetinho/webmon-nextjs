import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function MainContainer({ children }: any) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
