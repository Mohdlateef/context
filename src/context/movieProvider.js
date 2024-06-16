import { useState } from "react";
import movieContext from "./movieContext";


let MovieProvider=(props)=>{
 let [moivelist,setMovieList]=useState("humtum")
    return(
        <movieContext.Provider value={
            {
                moivelist:moivelist,
                setMovieList:setMovieList,
            }
        }>
                        {props.children}
        </movieContext.Provider>
    )
}

export default MovieProvider;