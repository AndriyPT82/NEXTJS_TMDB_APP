const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${API_KEY}`,
  },
};

const request = async (endpoint, queryParams = "", lang = "en-US") => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}api_key=${API_KEY}${queryParams}&language=${lang}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getTrendsMovies = () => request(`/trending/movie/week?`);
const getTrendsPerson = () => request(`/trending/person/week?`);
const getNowPlaing = () => request(`/movie/now_playing?`);
const getUpcoming = () => request(`/movie/upcoming?`);

const getTvSeries = () =>
  request(
    `/discover/tv?`,
    "include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&vote_count.gte=5000"
  );
const getTopRated = () => request(`/movie/top_rated?`);
const getMovieByID = (movieId) =>
   request(`/movie/${movieId}?`, `&append_to_response=credits,videos`);
const getTVSerieByID = (movieId) =>
  request(`/tv/${movieId}?`, `&append_to_response=credits`);
const getRecommended = (movieId) =>
  request(`/movie/${movieId}/recommendations?`);
const getSimilar = (movieId) => request(`/movie/${movieId}/similar?`);
const getPersonById = (person_id) =>
  request(`person/${person_id}?`, "&append_to_response=movie_credits");
const getActorFilmography = (person_id) =>
  request(`person/${person_id}/movie_credits`);

export {
  getTrendsMovies,
  getTrendsPerson,
  getNowPlaing,
  getUpcoming,
  getTvSeries,
  getTopRated,
  getMovieByID,
  getTVSerieByID,
  getRecommended,
  getSimilar,
  getPersonById,
};
