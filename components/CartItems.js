/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db, useAuth } from '../firebase'
import { FaRegWindowClose } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"

function CartItems() {
    const user = useAuth()
    const [ cartItems, setCartItems ] = useState([])
    const [ total, setTotal ] = useState(0)
    
    useEffect(() => {
        if(user){
            onSnapshot(collection(db, 'users', `${user.email}`, 'cart'), (snapshot) => setCartItems(snapshot.docs))
        }
       
    }, [user])
    
    useEffect(() => {
        setTotal(0)
        cartItems.forEach((item) => {
            setTotal(prevTotal => prevTotal + (item.data().quantity * item.data().price))
        })
    },[cartItems])

    const deleteItem = async (product) => {
        await deleteDoc(doc(db, 'users', `${user.email}`, 'cart', product))
    }

    const updateCount = async (product, quantity) => {
        await updateDoc(doc(db, 'users', `${user.email}`, 'cart', product), {
            quantity: parseInt(quantity)
        })
    }

    const updateSize = async (product, size) => {
        await updateDoc(doc(db, 'users', `${user.email}`, 'cart', product), {
            size: size
        })
    }

  return (
    <div className='w-10/12 min-h-screen mx-auto bg-white pt-20 lg:pt-10 p-5'>
        <div className='flex items-center space-x-2 text-xl font-bold ml-10 pb-8'>
            <FiShoppingCart/>
            <h1>Shopping Cart</h1>
        </div>
        
        <div className='flex px-12'>
            <div className='grid grid-cols-5 md:grid-cols-7 items-center justify-items-center gap-4' >
                <p className='hidden md:flex'></p>
                <p className='hidden md:flex'>Product</p>
                <p className='hidden md:flex'>Size</p>
                <p className='hidden md:flex'>Quantity</p>
                <p className='hidden md:flex'>Price</p>
                <p className='hidden md:flex'>Subtotal</p>
                <p className='hidden md:flex'></p>
        { cartItems.length === 0 ?
            (
                <div>Cart is empty!</div>
            ) : (
                cartItems.map((product) => (   
                    <>
                            <div key={product.id}>
                                <img src={product.data().img} 
                                    className='w-full object-cover'
                                    alt="" />
                            </div>
                            <h1 className='hidden md:inline'>{product.data().name}</h1>
                            <select defaultValue={product.data().size} onChange={(e) => updateSize(product.id, e.target.value)}  className='outline-none border border-black'>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                            <input type="number" defaultValue={product.data().quantity} 
                            onChange={(e) => updateCount(product.id, e.target.value)}
                            className='w-10 text-center outline-none border border-black'/>
                            <p>${product.data().price}.00</p>
                            <p className='hidden md:inline'>${product.data().quantity * product.data().price}.00</p>
                            <FaRegWindowClose className='w-5 h-5 cursor-pointer'
                            onClick={() => deleteItem(product.id)}
                            />
                        </>
                            ))
                            )
                        }
                        </div>
            </div>
            <div className='w-11/12 text-right font-bold text-xl mt-5'>TOTAL ${total}.00 </div>
    </div>
  )
}

export default CartItems