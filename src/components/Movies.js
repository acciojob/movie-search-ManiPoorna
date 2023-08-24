import React, { useState } from 'react'
import axios from 'axios'

const Movies = () => {
    let[movies,setMovies] = useState([]);
    let [searchTerm,setSearchTerm] = useState("");
    console.log(searchTerm)
  
    const searchData = ()=>{
        axios(`http://www.omdbapi.com/?apikey=26829b18&s=${searchTerm}`)
        .then((response)=>{
            console.log(response.data.Search);
            setMovies(response.data.Search);
        })
        .catch(err=>{
            console.log("Error -> ",err);
        })
    }
  
    return (


    <div>
        <p><b>Search Movie</b></p>
        <input type='text' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button onClick={searchData}>Search</button>
        {
            movies && movies.map((movie,index)=>(
                <li key={index}>
                    <h1>{movie.Title}({movie.Year})</h1>
                    <img src={movie.Poster} alt="Poster"/>    
                </li>
            ))
        }
    </div>
  )
}

export default Movies