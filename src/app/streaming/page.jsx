import Myfetch from '@/components/fetching data'
import React from 'react'
import { Suspense } from 'react'

function page() {
  return (
    <>
    <div className='text-center text-3xl'> we are using streaming feature here</div>
    <Suspense fallback='loading wait...'>
    <Myfetch type={'no-store'}/>
    </Suspense>
    </>
  )
}

export default page