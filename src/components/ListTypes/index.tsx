import React from 'react'

export default function ListTypes({poke}: any) {
  return (
    <>
    {poke.types.map((slot: any) => {
          return (
            <p key={slot.slot}>
              {slot.type.name}
            </p>
          );
        })}
    </>
  )
}
