import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

//Created an API URL
const API_URL = 'https://www.omdbapi.com?apikey=4d067738';
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
                />
            </div>
        </div>
    );
}

export default App;