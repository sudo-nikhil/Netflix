import React, { useEffect, useState } from 'react'
import MovieCards from '../components/MovieCards'
import poster1 from "../assets/posters/poster1.jpg"
import Searchbar from '../components/Searchbar'
import Navbar from '../components/Navbar'

const Home = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")


    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=4b102427b06012a3d584bf71112f166a`;

        if(search){
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=4b102427b06012a3d584bf71112f166a`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                setMovies(data.results)

            })

            .catch((err) => {
                console.error('Fetch error:', err);
            });
    }, [page, search]);

    const handlePreviousPage = () => {
        if (page > 1)
            setPage((prev) => prev - 1)
    }

    const handleNextPage = () => {
        setPage((prev) => prev + 1)
    }
    return (
        
        <div>
            <Navbar />
        <div className='pt-40'>
            <Searchbar setSearch = {setSearch}/>
            <div className="movie-container grid grid-cols-1 gap-4 mx-10 md:grid-cols-3 lg:grid-cols-4  ">
                {
                    movies.map((movie, index) => (
                        <MovieCards key={index} movie={movie} />
                    ))

                }

            </div>
            <div className="pagination-container  mx-5 mt-10 mb-3 flex justify-between">
                <button className='px-3 py-2 text-white bg-[#121726] border rounded-md ' onClick={handlePreviousPage}>Previous</button>
                <button className='px-3 py-2 text-white bg-[#121726] border rounded-md ' onClick={handleNextPage}>Next</button>
            </div>
        </div>
        </div>

    )
}

export default Home
