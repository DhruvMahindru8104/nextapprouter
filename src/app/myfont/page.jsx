import React from 'react'
import { oswald } from '../fonts'

function page() {
  return (
    <>
    <div className='text-3xl text-center'> Is Page mein font optimization use hui hai </div>
    <br />
    <div className='text-5xl'>normal text without font</div>
    <br />
    <div className={`${oswald.className} antialiased text-5xl`}>text with oswald font </div>
    </>
  )
}

export default page