import Myfetch from '@/components/fetching data'
import React from 'react'

function page() {
  return (
    <>
    <div className='text-center text-3xl'> we are using streaming feature here</div>
    <Myfetch className='bg-red-500' type='no-store' />
    </>
  )
}

export default page