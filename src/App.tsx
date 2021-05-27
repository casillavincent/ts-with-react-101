import React, { useState, useEffect } from "react";

function App() {
   const API_KEY: string = "8b205dd749ffb47624d44012927f6953";

   /* Set Interface */
   interface Movie {
      movies: {
         title: string;
         id: number;
      }[];
   }
   const [popular, setPopular] = React.useState<Movie["movies"] | null>(null);

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
   return (
      <div className="App">
         <h1>TypeScript & React</h1>
         {/* Map through all popular items */}
         {popular !== null &&
            popular.map((movie, i) => (
               <div className={`popular-movie-item-${i}`} id={`${movie.id}`}>
                  <h2>{movie.title}</h2>
                  <p>{movie.id}</p>
               </div>
            ))}
      </div>
   );
}

export default App;
