import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

//Created an API URL
const API_URL = 'https://www.omdbapi.com?apikey=4d067738';

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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
                value = "Superman" 
                onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster} alt="movie1.Title"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;