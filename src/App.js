import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//Created an API URL
const API_URL = 'https://www.omdbapi.com?apikey=4d067738';

// const movie1 = {
//     "Title": "The Amazing Spiderman 2 Webb Cut",
//     "Year": "2021",
//     "imdbID": "tt18351128",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    //useeffect accepts a callback function and a dependency array as the other one if we want to call it from start only
    useEffect(() => {
        searchMovies('Spiderman');

    }, []);
    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                placeholder="search for movies"
                value = {searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) : (
                    <div className="empty">
                        <h2>No movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;