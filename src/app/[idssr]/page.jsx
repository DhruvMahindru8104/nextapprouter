import React from 'react'

async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.idssr}`);
    const data = await res.json()
  return (
    <>
    <div className='text-center text-4xl'> this is dynamic routing with ssr </div>
    {
      <div>
        <div>{data.id}</div>
        <div>{data.title}</div>
        <div>{data.body}</div>
      </div>
    }
    </>
  )
}

export default page