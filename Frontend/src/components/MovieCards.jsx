import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'
// import {toggleWatchList} from '../context/WatchListContext'

const MovieCards = ({movie}) => {
    const{toggleWatchList, watchlist}=useContext(WatchListContext);
    const inWatchlist = watchlist.some(m => m.id === movie.id);
    console.log("watchlist", watchlist)

    return (
        <div className='bg-[#000000] p-4 text-white border-[5px] border-red-600 rounded-md shadow-md relative  '>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-80 object-contain rounded-sm '/>
            <h2 className='text-xl font-bold mt-5'>{movie.title}</h2>
            <p className='text-sm text-gray-400 mt-2'>{movie.release_date}</p>
            <div className='absolute top-2 right-2'>
                <button className='text-red-500 text-xl' onClick={()=>{
                    toggleWatchList(movie)
                }}>{inWatchlist ? <FaHeart /> : <FaRegHeart />}</button>
            </div>
        </div>
    )
}

export default MovieCards
