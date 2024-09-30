import React from 'react'
import Link from 'next/link';

async function Myfetch({className,type}) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // Optional: Use caching behavior (you can modify this based on your needs)
    cache: type // This mimics getServerSideProps behavior
});
const data=await res.json()
  return (
    <>
    {data.map((i)=>{
      return(
        <div key={i.id}>
          <Link href={type === 'no-store' ? `/${i.id}` : type === 'force-cache' ? `/static/${i.id}` : '#'}>
          <div className={`bg-amber-400 my-4 ${className}`}>
       <div >{i.title}</div>
       <div>{i.body}</div>
          </div>
          </Link>
       </div>
      )
    })}
    </>
  )
}

export default Myfetch