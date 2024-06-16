import React, { useState } from "react";
import { useContext } from "react";
import movieContext from "../context/movieContext";

const Hello = () => {
  let [newmovie, getnewmovie] = useState("");
  let movie = useContext(movieContext);
  
  return (
    <div>
      <p>You can edit your movies here</p>
      <input
      value={newmovie}
        type="text"
        placeholder="put new movie name"
        onChange={(e) => {
          getnewmovie(e.target.value);
        }}
      ></input>
      <button onClick={()=>{
        movie.setMovieList(newmovie);
        getnewmovie("");
      }}>Enter New Movie</button>
    </div>
  );
};
export default Hello;
