import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function MainContainer({ children }: any) {
  return (
    <body>
      <Navbar />
        {children}
      <Footer />
    </body>
  )
}
