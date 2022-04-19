import React from 'react'
import CartItems from '../components/CartItems'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Menu from '../components/Menu'

function Cart() {
    const router = useRouter()
    const {user} = router.query
    
  return (
    <div className='w-full h-full bg-gray-200'>
      <Menu />
      <CartItems user={user}/>
      <div className="bg-black mt-10">
        <Footer/>
      </div>
    </div>
  )
}

export default Cart