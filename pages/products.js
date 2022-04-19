import { collection, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import ProductsList from '../components/ProductsList'
import { db } from '../firebase'

function Products() {
    const [ products, setProducts] = useState([])

    useEffect(() => (
        onSnapshot(collection(db, 'products'), (snapshot) => setProducts(snapshot.docs)),
        []
    ))
    
    return (
        <div className='w-full h-full bg-gray-200'>
          <Menu/>
          <ProductsList products={products} />
          <div className="bg-black mt-10">
            <Footer/>
          </div>
        </div>
      )
}

export default Products