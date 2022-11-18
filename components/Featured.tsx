import React from 'react'

type Props = {}

function Featured({}: Props) {
  return (
    <div className='grid gap-4 grid-cols-4 grid-rows-2 h-screen'>
      <div id = "main" className='bg-slate-500 row-span-2 col-span-2'> <h1>This is sparta</h1></div>
      <div className='bg-red-100'></div>
      <div className='bg-red-200'></div>
      <div className='bg-red-300'></div>
      <div className='bg-red-600'></div>
      </div>
  )
}

export default Featured