import React from "react";
import { useEffect } from "react";


//Created an API URL
const API_URL = 'https://www.omdbapi.com?apikey=4d067738';
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    //useeffect accepts a callback function and a dependency array as the other one if we want to call it from start only
    useEffect(() => {
        searchMovies('Spiderman');

    }, []);
    return (
        <h1>App</h1>
    );
}

export default App;