import React from "react";
import { useContext } from "react";
import movieContext from "../context/movieContext";

const Hii=()=>{
let movie=useContext(movieContext)
console.log(useContext(movieContext))
console.log(movie)
    return(
        <div>
          <h1>All movies are here</h1>
          <h2>{movie.moivelist}</h2>
        </div>
    )}
export default Hii;