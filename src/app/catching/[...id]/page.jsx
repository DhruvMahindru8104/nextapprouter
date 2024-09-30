import React from 'react'

async function page({params}) {
console.log(params)
  return (
    <>
    This is your path
    {
        params.id.map((i)=>{
            return(
                <div key={i}>
                    <div className='bg-blue-700 text-3xl'>
                    {i}
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default page