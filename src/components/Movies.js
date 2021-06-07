import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(e => (
        <div>
          Title: {e.title} Time: {e.time}
          <ul>
            {e.genres.map(g => (
              <li>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
