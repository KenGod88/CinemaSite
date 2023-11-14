import React from "react";
import movieData from "../utils/movies.json";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-20 justify-center ">
      {movieData.map((movie) => {
        return (
          <div
            onClick={() => navigate(`/movies/${movie.href}`)}
            className="rounded-lg shadow-xl flex flex-col overflow-clip cursor-pointer bg-gray-900   "
            key={movie.title}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="h-3/4 object-cover"
            />
            <h2 className="font-bold text-lg mb-2 text-center m-3 text-white">
              {movie.title}
            </h2>
            <div className="flex flex-row p-3 justify-center  ">
              {movie.genres.map((genre) => {
                return (
                  <button
                    className=" bg-purple-950 rounded-full px-3 py-1 text-xs font-semibold text-white "
                    key={genre}
                  >
                    #{genre}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
