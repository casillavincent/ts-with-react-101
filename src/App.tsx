/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

function App() {
   const API_KEY: string = "8b205dd749ffb47624d44012927f6953";
   const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500";

   /* Set Interface */
   interface Movie {
      movies: {
         title: string;
         id: number;
         poster_path: string;
         overview: string;
      }[];
   }
   const [popular, setPopular] = useState<Movie["movies"] | null>(null);

   /* Fetch Movies */
   const fetchPopular = async () => {
      const endpoint = await fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      );
      const data = await endpoint.json();
      setPopular(data.results);
   };
   /* Run Once on component mount*/
   useEffect(() => {
      fetchPopular();
   }, []);

   if (popular !== null) {
      console.log(popular);
   }

   // let toLocal: Movie["movies"] = [];
   // const filterData = () => {
   //    if (popular !== null) {
   //       for (let i = 0; i <= popular.length; i++) {
   //          const toPush: { title: string; id: number; poster_path: string; overview: string } = {
   //             title: popular[i].title,
   //             id: popular[i].id,
   //             poster_path: popular[i].poster_path,
   //             overview: popular[i].overview,
   //          };
   //       }
   //    }
   // };
   // filterData();

   return (
      <div className="App">
         <h1>TypeScript & React</h1>
         {/* Map through all popular items */}
         {popular !== null &&
            popular.map((movie, i) => (
               <div className={`popular-movie-item-${i}`} id={`${movie.id}`} key={i}>
                  <img
                     src={`${BASE_URL_IMG}${movie.poster_path}`}
                     alt={`${movie.title}`}
                     width="250"
                  />
                  <h2>{movie.title}</h2>
                  <p>{movie.id}</p>
                  <p>{movie.overview}</p>
               </div>
            ))}
      </div>
   );
}

export default App;
