import {
  TrendingMovies,
  TrendingPerson,
  UpcomingMovies,
  TvSeries,
  NowPlaying,
  fetchtvSeries,
  Carousel,
} from "@/components/index.js";
import {
  getTrendsMovies,
  getTrendsPerson,
  getNowPlaing,
  getUpcoming,
  getTvSeries,
  getTopRated,
  getMovieByID,
} from "@/utils/requests";
import { styled } from "styled-components";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function Index({
  trending,
  nowPlaying,
  upcoming,
  trendingPerson,
  tvSeries,
}) {
  return (
    <Home>
      <TrendingMovies trending={trending} />
      <NowPlaying nowPlaying={nowPlaying.results} />
      <UpcomingMovies upcoming={upcoming.results.slice(0, 5)} />
      <TrendingPerson trendingPerson={trendingPerson.results} />
      <TvSeries tvSeries={tvSeries.results} />
    </Home>
  );
}

export const getServerSideProps = async () => {
  try {
    const [trends, trendingPerson, nowPlaying, upcoming, tvSeries] =
      await Promise.all([
        getTrendsMovies(),
        getTrendsPerson(),
        getNowPlaing(),
        getUpcoming(),
        getTvSeries(),
      ]);

    return {
      props: {
        trending: trends.results.slice(0, 5),
        trendingPerson,
        nowPlaying,
        upcoming,
        tvSeries,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
