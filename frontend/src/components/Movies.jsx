import React from "react";
import movieData from "../utils/movies.json";

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 bg-gray-500">
      {movieData.map((movie) => {
        return (
          <div
            className="rounded-lg shadow-lg flex flex-col overflow-clip h-88 cursor-pointer bg-black "
            key={movie.title}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="h-3/4 object-cover"
            />
            <h2 className="font-bold text-lg text-center">{movie.title}</h2>
            <span>
              {movie.genres.map((genre) => {
                return (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={genre}
                  >
                    #{genre}
                  </span>
                );
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
