import React, { useContext } from 'react'


const Generfilter = ({ genrelist, setSelectedGenre }) => {

    return (
        <div>
            <select onChange={(e) => {setSelectedGenre(e.target.value)}} className="sm: text-xs p-2 px-4 bg-[#121726] bg-opacity-60 text-white border rounded-lg md:text-[16px] md:px-2">
                <option value="">All Genres</option>
                {
                    genrelist.map((genre) => {
                        return (
                            <option key={genre} value={genre.id}>{genre.name}</option>
                        )
                    })
                }
            </select>

        </div>
    )
}

export default Generfilter
