import Myfetch from '@/components/fetching data'
import React from 'react'

function page() {
  return (
    <>
    <div className='text-center text-3xl'> we are using streaming feature here</div>
    <Myfetch className='bg-green-500' type='force-cache'/>
    </>
  )
}

export default page