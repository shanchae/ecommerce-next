import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Product from '../components/Product'

function ProductOverview() {
  const router = useRouter()
  const { product } = router.query

  return (
    <div className='w-full h-full bg-gray-200'>
      <Menu />
      <Product id={product}/>
      <div className="bg-black mt-10">
        <Footer/>
      </div>
    </div>
  )
}

export default ProductOverview