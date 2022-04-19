import { setDoc, doc, onSnapshot, collection, where } from 'firebase/firestore'
import React from 'react'
import { useEffect, useState } from 'react'
import { db, useAuth } from '../firebase'
import { BsFillBagPlusFill } from "react-icons/bs"

function Product({id}) {
  const currentUser = useAuth()
  const [ product, setProduct ] = useState({})
  const [ size, setSize ] = useState('')
  const [ quantity, setQuantity ] = useState()
  

  useEffect(() =>
    onSnapshot(doc(db, 'products', `${id}`), (snapshot) => setProduct(snapshot.data())),
    [id]

  )

  const addToCart = () => {
    if (!currentUser){
      alert('Please sign in')
    }

    setDoc(doc(db, 'users', `${currentUser.email}`, 'cart', `${id}`), {
      size: size,
      img: product.img,
      quantity: parseInt(quantity),
      price: product.price,
      name: product.name
    })
  }

  

  return (
    <div className='w-9/12 min-h-full bg-white mx-auto py-10 mt-10 '>
      <div className='grid grid-cols-1 lg:flex justify-items-center'>
        <div className='w-7/12'>
          <img src={product.img} 
            className='w-full object-cover px-12'
          alt="" />
        </div>
        <div className='space-y-5 flex flex-col text-left mt-8'>
          <h1 className='text-lg md:text-3xl font-bold'>{product.name}</h1>
          <h1 className='text-lg md:text-2xl'>${product.price}.00</h1>
          <div className='flex space-x-5'>
            <div className='flex items-center'>
              <h1 className='text-lg md:text-lg'>SIZE:</h1>
              <select onChange={(e) => setSize(e.target.value)}  className='outline-none ml-5 border border-black'>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>   
            </div>
            <div className='flex items-center'>
              <h1 className='text-lg md:text-lg'>QUANTITY:</h1>
              <input className='flex text-center outline-none border border-black w-10 ml-4' type="number" name="" id="" min={1} max={10} onChange={(e) => setQuantity(e.target.value)}/>
            </div>
          </div>
          <button 
            onClick={() => addToCart()}
            className='flex items-center justify-evenly w-36 mx-auto border-2 border-black p-2 hover:bg-black hover:text-white transition-colors ease-in-out duration-300'
          >
            <BsFillBagPlusFill className='w-5 h-5'/> Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product