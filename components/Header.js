import React from 'react'
import { useEffect, useState } from 'react'
import FloatingMenu from './FloatingMenu'
import Navigation from './Navigation'
import { db, useAuth, handleSignIn, handleSignOut } from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore'


function Header({onScrollBrands, onOpen}) {
    const currentUser = useAuth()
    const [ isHovering, setisHovering ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ count, setCount ] = useState(0)
    
    useEffect(() => {
        if (currentUser) {

         onSnapshot(collection(db, 'users', `${currentUser.email}`, 'cart'), (snapshot) => setCartItems(snapshot.docs))

        }
        
    }, [currentUser])

    useEffect(() =>{

      setCount(0)
      
      cartItems.forEach((item) =>{
        setCount(prevCount => prevCount + item.data().quantity)
      })
    },[cartItems])

    
    const showMenu = () => {
        setisHovering(true)
      }
     
    const hideMenu = () => {
     setisHovering(false) 
    }

    

  return (
    <div className='fixed top-0 z-50 lg:relative w-full'>
        <div className='shadow-xl bg-black'>
            <Navigation
                user={currentUser}
                cartItems={count}
                onSignIn={handleSignIn}
                onSignOut={handleSignOut}
                onShow={showMenu}
                onHide={hideMenu}
                onOpen={onOpen}
                onScrollBrands={onScrollBrands}
            />
        </div>
        <FloatingMenu
            isHovering={isHovering}
        />
    </div>
  )
}

export default Header