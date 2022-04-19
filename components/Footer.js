/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import Link from 'next/link'

function Footer() {
  return (
    <div className='flex justify-around items-center w-10/12 mx-auto text-white py-10'>
      <Link href={'/'}>
        <h1 className='text-xl flex'>FASHIONISTA</h1>
      </Link>
        <ul className='flex flex-col space-y-2 text-sm'>
            <li>FAQs</li>
            <li>ABOUT US</li>
            <li>MORE</li>
        </ul>
        <div>
          <p className='text-md mb-3'>Follow Us On:</p>
          <ul className='flex space-x-4 text-2xl'>
              <li><FaFacebook/></li>
              <li><FaInstagram/></li>
              <li><FaPinterest/></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer