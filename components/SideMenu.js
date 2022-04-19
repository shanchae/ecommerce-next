import React from 'react'
import Link from 'next/link'
import {FaSistrix, FaChevronCircleLeft} from 'react-icons/fa'

function SideMenu({onScrollBrands, isOpen, onClose}) {
  return (
    <div className={`md:hidden fixed top-0 pt-10 bg-black text-white w-5/12 flex-col items-center z-50 h-screen ease-in-out duration-500 ${!isOpen ? 'translate-x-[-32rem]' : 'translate-x-0'}`}>
        <div className='w-9/12 mx-auto space-y-6'>
            <FaChevronCircleLeft 
                onClick={onClose}
                className='w-5 h-5 cursor-pointer'
            />
            <Link href={'/'}>
                <div className='text-md cursor-pointer'>FASHIONISTA</div>
            </Link>
            <div className='flex items-center border rounded-full px-3 py-1 bg-white h-8 w-full'>
                <input 
                    className='outline-none bg-transparent text-xs w-full'
                    type="search" 
                    
                    placeholder='Search...'
                />
                <FaSistrix
                    className='w-4 h-4 text-black rounded-full'
                />
            </div>
            <ul className='flex flex-col text-xs space-y-8'>
                <Link href={'/products'}>
                    <li className='cursor-pointer'>CLOTHING</li>
                </Link>
                <Link href={'/products'}>
                    <li className='cursor-pointer'>ACCESSORIES</li>
                </Link>
                <Link href={'/products'}>
                    <li className='cursor-pointer'>BAGS</li>
                </Link>
                <Link href={'/products'}>
                    <li className='cursor-pointer'>BEAUTY</li>
                </Link>
                <li className='cursor-pointer' onClick={onScrollBrands}>BRANDS</li>
            </ul>
        </div>
    </div>
  )
}

export default SideMenu