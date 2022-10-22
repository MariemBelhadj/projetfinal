import React from "react";
import './nav.css';
import MoviesList from './MoviesList';

import AddMovie from "./AddMovie";

const Main = ({movies,setMovies, searchWord , ratingSearch}) => {

    
    const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}
    return (
        <>

           
            <div className="Container">
                <MoviesList data={searchWord
                    ? movies.filter((movie) =>
                        movie.title.toLowerCase().includes(searchWord.toLowerCase())
                    )
                    : ratingSearch > 1
                        ? movies.filter((movie) => movie.rate >= ratingSearch)
                        : movies
                } />

            </div>
            
            
            <AddMovie handleAdd={handleAdd}/>
        </>
    )
}
export default Main;