import React from 'react'

export default function TitleSection({children}: any) {
  return (
    <>
      <h3 className=" text-5xl font-medium text-gray-700 font-sans mb-5">
          {children}
      </h3>
    </>
  )
}
