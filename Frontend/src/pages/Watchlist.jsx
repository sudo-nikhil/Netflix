import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import Generfilter from '../components/Generfilter'
import MovieCards from '../components/MovieCards'
import { useContext } from "react";
import { WatchListContext } from '../context/WatchListContext';
import Navbar from '../components/Navbar';

const Watchlist = () => {
    const { watchlist, genrelist } = useContext(WatchListContext)
    const [search, setSearchMovie] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

    const FilteredMovies = watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
        .filter(movie => {
            return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
        })
    return (
        <div>
            <Navbar />
            <div className='pt-40'>
                <Searchbar setSearch={setSearchMovie} />
                <div className='w-full flex justify-center mb-6'>
                    <Generfilter genrelist={genrelist} setSelectedGenre={setSelectedGenre} />
                </div>

                <div className="movie-container grid grid-cols-1 gap-4 mx-10 md:grid-cols-3 lg:grid-cols-4  ">
                    {
                        FilteredMovies.map((movie, index) => (
                            <MovieCards key={index} movie={movie} />
                        ))

                    }

                </div>

            </div>
        </div>

    )
}

export default Watchlist
