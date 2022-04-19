import React from 'react'

function Featured() {
  return (
    <div className='mt-10'>
        <h1 className='w-fit mx-auto py-2 text-3xl font-bold border-b-4 border-black px-5'>
            Featured
        </h1>
        <div className='grid grid-cols-2 max-w-max md:grid-cols-5 md:grid-rows-2 mt-8 gap-1 justify-items-center'>
            <div className='md:col-span-2 md:row-span-2'>
                <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='h-full object-cover' alt="" />
            </div>
            <div className='md:col-start-3 md:row-start-1'>
                <img src="https://images.unsplash.com/photo-1611824204322-24963b44d68b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhc2hpb258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='h-full object-cover' alt="" />    
            </div>
            <div className='md:col-start-5 md:row-start-2'>
                <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" className='h-full object-cover' alt="" />
            </div>
            <div className='md:col-span-2'>
                <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='h-full object-cover' alt="" />
            </div>
            <div className='col-span-2 md:col-start-3'>
                <img src="https://images.unsplash.com/photo-1572251328767-e59f06f13ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='h-full w-full object-cover' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured