import React from "react";
import Movie from "./Movie";

const MoviesList=({data})=>{
    return(
        <>
        {data.map(e=>(
            <>
            <Movie movie={e}/>
            </>
        ))}
         

        </>
    )
}
export default MoviesList;