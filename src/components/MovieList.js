import React,{useState} from "react";
import MovieCard from "./MovieCard";
import Modale from "./Modal"

function MovieList ({text,newRating})  {
    let [films, setFilms]= useState([
      {
        title: "2012",
        description: "A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91l03sXZxDL._RI_.jpg",
        rate: "6",
      },
      {
        title: "Independence Day",
        description:
          "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
        posterUrl:
          "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        rate: "7",
      },
      {
        title: "No Time to Die",
        description:
          "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        posterUrl:
          "https://preview.redd.it/9g49z7a1qrj41.jpg?width=640&crop=smart&auto=webp&s=993afec1ad3481b33a0b198f59a8a37450c005cb",
        rate: "5",
      },
    ],)
  
    let  addMovies=(newMovie)=>{
    setFilms(films => [...films, newMovie])
    console.log(newMovie)
  }
  
    return (
      <div>
       <div style={{ display: "flex", justifyItems: "space-between" }}>
        {films.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && el.rate >= newRating).map((el) => (
          <MovieCard
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        ))}
        
       </div>
      
      <Modale addMovies={addMovies}/>
      
      </div>
    );
  }


export default MovieList;