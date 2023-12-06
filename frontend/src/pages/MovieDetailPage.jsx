import movieData from "../utils/movies.json";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MovieDetailPage = () => {
  const { moviehref } = useParams();
  const [ticketsCouter, setTicketsCounter] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 12;

  // const { ticketHistory, setTicketHistory } = useState([]);

  //handle click doet momenteel niks
  const handleClick = (index) => {
    const updatedSelectedSeats = [...selectedSeats];
    updatedSelectedSeats[index] = !updatedSelectedSeats[index];
    setSelectedSeats(updatedSelectedSeats);
    setTicketsCounter((prevCounter) =>
      updatedSelectedSeats[index] ? prevCounter + 1 : prevCounter - 1
    );

    console.log("clicked!!!");
    console.log(ticketsCouter);
  };

  const movie = movieData.find((movie) => movie.href === moviehref);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      <div className="max-w-5xl mx-20 my-1 p-20 text-white flex flex-col md:flex-row items-center text-center md:text-left">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-80 md:w-1/2 h-auto rounded mb-4 md:mb-0"
        />
        <div className="flex-1 md:ml-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-2">{movie.extract}</p>
          <div className="justify-center  ">
            <div>
              <h2 className="underline mt-4">Cast</h2>
            </div>
            <div className="grid grid-cols-6 p-4">
              {movie.cast.map((cast) => {
                return (
                  <p
                    className=" grid grid-cols-6 text-xs font-semibold text-white "
                    key={cast}
                  >
                    {cast}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-extrabold">Tickets</h1>
          <p className="font-thin">
            {ticketsCouter} tickets = {ticketsCouter * ticketPrice} Euro
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Bestel tickets
          </button>
        </div>
        <hr className="w-96 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10"></hr>
        <div className="max-w-3xl grid grid-cols-10 justify-center gap-4 mx-auto">
          {Array.from({ length: 60 }, (_, index) => (
            <FontAwesomeIcon
              onClick={() => handleClick(index)}
              icon={faChair}
              className={`text-white text-2xl mx-2 cursor-pointer ${
                selectedSeats[index] ? "text-blue-500" : ""
              }`}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
