import Image from 'next/image';
import React, { FC } from 'react'

interface LoaderProps {
  
}

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-4'>
     <div className='relative w-10 h-10 animate-pulse'>
        <Image
        alt="logo"
        fill
        src="/logo.png"
        />
     </div>
     <p className='text-sm text-muted-foreground'>
        Cloud processes...
     </p>
    </div>
  )
}

export default Loader;