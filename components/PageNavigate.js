import { Pagination } from '@mui/material'
import React, { useState } from 'react'


function PageNavigate({ postsPerPage, totalPosts, paginate }){
    const [ page, setPage ] = useState(1)
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    const handleChange = (e, p) => {
        setPage(p)
        paginate(p)
    }

  return (
    <nav className='mx-auto w-fit mt-10'>
        <div className='flex space-x-4'>
            <Pagination 
                count={pageNumbers.length}
                onChange={handleChange}
            />
        </div>
    </nav>
  )
}

export default PageNavigate