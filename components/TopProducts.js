/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

function TopProducts({topProducts}) {
  return (
    <div className='mt-10'>
        <h1 className='w-fit mx-auto py-2 px-5 text-3xl font-bold border-b-4 border-black'>
            Latest Products
        </h1>
        <Carousel showStatus={false} showThumbs={false} infiniteLoop swipeable className='mt-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {topProducts.slice(0, 4).map((product) => (
                    <Link href={{
                        pathname: '/productoverview',
                        query: {
                            product: product.id
                        }
                    }}>
                        <div key={product.id} className='cursor-pointer bg-white'>
                            <img
                                src={product.data().img} 
                                className='w-8 h-46 lg:h-80 object-cover'
                            />
                            <div className='text-left p-3 space-y-1'>
                                <p className='font-bold truncate'>{product.data().name}</p>
                                <p>${product.data().price}.00</p>
                            </div>
                        </div>
                    
                    </Link>
                ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {topProducts.slice(5, 9).map((product) => (
                    <Link href={{
                        pathname: '/productoverview',
                        query: {
                            product: product.id
                        }
                    }}>
                        <div key={product.id} className='cursor-pointer bg-white'>
                            <img
                                src={product.data().img} 
                                className='w-8 h-46 lg:h-80 object-cover'
                            />
                            <div className='text-left p-3 space-y-1'>
                                <p className='font-bold'>{product.data().name}</p>
                                <p>${product.data().price}.00</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Carousel>
    </div>
  )
}

export default TopProducts