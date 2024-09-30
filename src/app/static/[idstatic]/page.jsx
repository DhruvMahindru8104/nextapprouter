import React from 'react'

async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.idstatic}`);
    const data = await res.json()
  return (
    <>
    <div className='text-center text-4xl'> This is static site dynamic routing with generateStaticParams  </div>
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

export async function generateStaticParams() {
    // Fetch the list of posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    // Map over the posts to generate params for each post based on `id`
    return posts.map((post) => ({
      idstatic: post.id.toString(), // Convert the `id` to a string to match the dynamic parameter
    }));
  }