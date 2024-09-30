'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Navbar() {
  const pathname=usePathname()
  return (
    <>
    <header className="text-gray-600 body-font dark:text-gray-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'myfont'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl dark:text-white">
        Tailblocks
      </span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/myfont' className="mr-5 hover:text-gray-900">
        Font optimization
      </Link>
      <Link  href='/streaming' className="mr-5 hover:text-gray-900">
        streaming
      </Link>
      <Link href='/dynamic'  className="mr-5 hover:text-gray-900">
        dynamic rendering
      </Link>
      <Link href='/static'  className="mr-5 hover:text-gray-900">
        static rendering
      </Link>
    </nav>

  </div>
</header>
<div className='text-center'>The path is {pathname}.We take this pathname from usepathname hook.This line is the part of navbar component which we place in layout.jsx</div>
    </>
  )
}

export default Navbar