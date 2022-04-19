import React, { useRef, useState } from 'react'
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

function Menu({onScrollBrands,}) {
    const [ isOpen, setisOpen ] = useState(false)
    const componentRef = useRef(null)


    const sideMenu = () => {
        setisOpen(!isOpen) 
    }

  return (
    <>
        <Header
            onScrollBrands={onScrollBrands}
            onOpen={sideMenu}
        />
        <div ref={componentRef}>
            <SideMenu
                onClose={sideMenu}
                isOpen={isOpen}
                onScrollBrands={onScrollBrands}
            />
        </div>
    </>
  )
}

export default Menu