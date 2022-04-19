/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Link from 'next/link'
import PageNavigate from './PageNavigate'

function ProductsList({products}) {
  const [ currentPage, setCurrentPage ] = useState(1)
  const postsPerPage = 12

  const indexOLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOLastPost - postsPerPage
  const currentItems = products.slice(indexOfFirstPost, indexOLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div  className='w-10/12 mx-auto pt-20 lg:pt-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {currentItems.map((product) => (
          <Link href={{
            pathname: '/productoverview',
            query: {
                product: product.id
            }
          }}>
            <div 
              className='bg-white cursor-pointer shadow-lg'
              key={product.id}>
              <img
                src={product.data().img} 
                className='w-full object-cover mx-auto'
              />
              <div className='text-left p-3 space-y-1' >
                <p className='font-bold border-b border-gray-400 py-1'>{product.data().name}</p>
                <p>${product.data().price}.00</p>
              </div>
            </div>
            </Link>
        ))}
        </div>
        <PageNavigate
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
    </div>
  )
}

export default ProductsList