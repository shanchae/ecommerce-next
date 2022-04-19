/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaSistrix, FaBars, FaShoppingBag } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

function Navigation({user, cartItems, onSignOut, onSignIn, onShow, onHide, onOpen, onScrollBrands}) {

  return (
    <div className='flex justify-between items-center py-3 w-11/12 mx-auto text-white relative'>
        <FaBars 
            onClick={onOpen}
            className='w-6 h-6 md:hidden cursor-pointer'
        />
        <Link href={'/'}>
            <div className='hidden lg:inline text-lg cursor-pointer'>FASHIONISTA</div>
        </Link>
        <ul className='hidden md:flex space-x-6'>
            <Link href={'/products'}>
                <li className='cursor-pointer' onMouseEnter={onShow}
                onMouseOut={onHide}>CLOTHING</li>
            </Link>
            <Link href={'/products'}>
                <li className='cursor-pointer' onMouseEnter={onShow}
                onMouseOut={onHide}>ACCESSORIES</li>
            </Link>
            <Link href={'/products'}>
                <li className='cursor-pointer' onMouseEnter={onShow}
                onMouseOut={onHide}>BAGS</li>
            </Link>
            <Link href={'/products'}>
                <li className='cursor-pointer' onMouseEnter={onShow}
                onMouseOut={onHide}>BEAUTY</li>
            </Link>
            <li className='cursor-pointer' onClick={onScrollBrands}>BRANDS</li>
        </ul>
        <div className='hidden md:flex border rounded-full px-3 py-1 bg-white'>
            <input 
                className='outline-none bg-transparent w-28 lg:w-full'
                type="search" 
                placeholder='Search...'
            />
            <FaSistrix
                className='w-8 h-8 bg-black text-white -mr-2 p-2 rounded-full'
            />
        </div>
        <div className='flex space-x-6 items-center'>
            { user ? (
                <>
                    <Link href={'/cart'}>
                        <div className='relative'>
                            <FaShoppingBag className='flex w-6 h-6 text-white cursor-pointer '/>
                            <div className='inline-flex absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 text-black bg-white items-center justify-center'>{cartItems}</div>
                        </div>
                    </Link>
                        <div className='w-10 h-10 relative cursor-pointer'>
                            <Image
                                src={user.img} alt="profile pic" 
                                layout="fill" 
                                objectFit="contain"
                                className='rounded-full'
                                onClick={onSignOut}
                            />
                        </div>
                </>
            ) : (
                <button onClick={onSignIn}>Sign In</button>
            )
                
            }
            
        </div>
    </div>
  )
}

export default Navigation