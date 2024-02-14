import axios from "axios";

export const getMovieList = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=3fad1972197ed97aae7daf68b5014ffb`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const searchMovie = async (item) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${item}&page=1&api_key=3fad1972197ed97aae7daf68b5014ffb`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching movie:", error);
    throw error;
  }
};
