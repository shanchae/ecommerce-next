import React from 'react'

function FloatingMenu({isHovering}) {
  return (
      <div className={`absolute w-full bg-white z-50 ${!isHovering? 'hidden' : 'flex'}`}
      >
        <div className='grid grid-cols-2 gap-3 md:flex justify-evenly items-center py-3 w-11/12 mx-auto'>
            <img src="https://images.unsplash.com/photo-1572251328450-19c5082bc582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            className='object-cover w-44 col-span-2' alt="" />
            <div>
                <h2 className='font-bold text-sm'>DRESSES</h2>
                <ul className='space-y-1 text-sm mt-5'>
                    <h2 className='font-bold'>TOPS</h2>
                    <li>Blouses</li>
                    <li>Tshirts</li>
                    <li>Tanktops & Camis</li>
                </ul>
            </div>
            <div>
                <ul className='space-y-1 text-sm mb-10'>
                    <h2 className='font-bold'>JUMPSUITS & BODYSUITS</h2>
                    <li>Jumpsuits</li>
                    <li>Bodysuits</li>
                </ul>
                <h2 className='font-bold text-sm'>SWEATSHIRTS</h2>
            </div>
            <div className='space-y-1 text-sm '>
                <h2 className='font-bold'>BOTTOMS</h2>
                <ul className='grid grid-cols-2 mb-10'>
                    <li>Pants</li>
                    <li>Skirts</li>
                    <li>Shorts</li>
                    <li>Leggings</li>
                    <li>Jeans</li>
                    <li>Denim Shorts</li>
                    <li>Denim Skirts</li>
                </ul>
                <h2 className='font-bold'>SUITS & SEPERATES</h2>
            </div>
            <div>
                <ul className='space-y-1 text-sm mb-10'>
                    <h2 className='font-bold'>SWEATERS & CARDIGANS</h2>
                    <li>Knit Tops</li>
                    <li>Cardigans</li>
                </ul>
                <h2 className='font-bold text-sm'>INTIMATES</h2>
            </div>
        </div>

      </div>
  )
}

export default FloatingMenu