import React from 'react'

function Brands({brands}) {
    
  return (
    <div className='w-11/12 mx-auto mt-10'>
        <h1 className='w-fit mx-auto py-2 px-5 text-3xl font-bold border-b-4 border-black'>
            Brands
        </h1>
        <div className='grid grid-cols-3 gap-2 mt-8'>
            {brands.map((brand) => (
                <div key={brand.id}
                    className='flex bg-black justify-center items-center'
                >
                    <img 
                        className='max-h-40 object-cover'
                        src={brand.data().img} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Brands