import MoviesItem from "./components/MoviesItem";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";

function App() {
  const [playingMovies, setPlayingMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPlayingMovies(result);
    });
  }, []);

  const search = async (item) => {
    if (item.length > 3) {
      const searchResult = await searchMovie(item);
      setPlayingMovies(searchResult.results);
    }
  };

  return (
    <div className="bg-[#131521] h-full px-10 py-10">
      <div className="grid grid-rows-2 h-1/3">
        <h1 className="text-white font-bold text-6xl flex justify-center items-center">
          Movie<span className="text-[#E4C904]">Bay</span>
        </h1>
        <p className="text-white text-2xl font-thin my-2 flex justify-center items-center text-center">
          Discover Your Cinematic Escape Where Every Movie Finds You
        </p>
      </div>
      <div className="flex justify-center my-4">
        <Input
          color="neutral"
          disabled={false}
          placeholder="Search..."
          size="lg"
          variant="soft"
          className="w-1/3"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="px-10 pt-10 pb-7">
        <h2 className="text-[#E4C904] font-bold text-3xl">Now Playing</h2>
      </div>
      <div className="px-10 flex flex-wrap gap-5">
        {playingMovies.map((movie, index) => (
          <MoviesItem
            key={index}
            img={movie.poster_path}
            title={movie.title}
            rate={movie.vote_average}
            release={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
