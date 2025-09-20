import React from 'react'

const Searchbar = ({setSearch}) => {
    return (
        <div>
            <input type="text" placeholder='Search Movies....' onChange={()=>{
                setSearch(event.target.value)
            }} className='md:1/2 p-2 px-4 mt-7 bg-[#121726] bg-opacity-60 text-white border rounded-lg w-2/4 backdrop-blur-md border-[#121726] fixed top-16 left-1/2 transform -translate-x-1/2 z-20' />
        </div>
    )
}

export default Searchbar

