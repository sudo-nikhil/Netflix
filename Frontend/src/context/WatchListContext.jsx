import { createContext, useEffect, useState } from "react";


export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchList] = useState([]);
    const [genrelist, setGenreList] = useState([]);

     useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=4b102427b06012a3d584bf71112f166a`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setGenreList(data.genres || []);
        });
}, []); 



    const toggleWatchList = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id)

        if (index === -1) {
            setWatchList([...watchlist, movie]);
        }
        else {
            setWatchList([...watchlist.slice(index + 1)]);
        }
    }

    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchList, genrelist }} >
            {children}
        </WatchListContext.Provider>
    )
}