import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async()=>{
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  }
  useEffect(()=>{
    getMovies()
  },[]);
  return(
  <div>
    {loading ? <h1>Loading</h1>: <div>
      {movies.map((movie)=> <Movie
       key={movie.id}
        id={movie.id}
       medium_cover_image={movie.medium_cover_image}
       title={movie.title}
       genres={movie.genres}
       summary={movie.summary}/> )}</div>}
  </div>
  );
}
export default Home;