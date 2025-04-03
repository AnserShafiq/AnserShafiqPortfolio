import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center absolute w-full h-full top-0 left-0 z-[999] bg-zinc-800'>
        <TailSpin visible={true} color='var(--goldenish-text-color)' width='150' radius={0}/>
        <h3 className='text-2xl mt-3 font-semibold text-[var(--goldenish-text-color)] tracking-wide'>Loading...</h3>
    </div>
  )
}

export default Loading