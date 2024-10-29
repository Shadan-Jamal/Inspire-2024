import React from 'react'

function Bats() {
  return (
    <div
    className='w-screen h-screen'
    >
      <video autoPlay src="/bats.mp4" muted className='w-full h-full object-fill bg-black/80 mix-blend-multiply'>
      </video>
    </div>
  )
}

export default Bats