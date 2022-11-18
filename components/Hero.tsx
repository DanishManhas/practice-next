import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    
    <div className={`z-0  h-screen bg-[url(./../public/alfons-morales.jpg)]`}>
      <div id = "overlay" className='z-1 absolute bg-slate-50 bg-opacity-10 -inset-x-0 h-screen '>
      <h1 className='grid h-screen place-items-center text-red-500'> This is hero Image</h1>        
      </div>
    </div>
  )
}

export default Hero