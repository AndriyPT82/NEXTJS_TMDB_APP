import ReactPlayer from "react-player";
import styled from "styled-components";
import {
  MediaProfileContainer,
  Carousel,
  VideoPreviewCard,
  PersonCardSmall,
  SecondaryButton,
} from "@/components";
import { getMovieByID, getRecommended } from "@/utils/requests";
import { GENRE_PATH, MOVIE_PATH, PERSON_PATH } from "@/utils/constants";

import Link from "next/link";
import "react-alice-carousel/lib/alice-carousel.css";

// #region STYLES

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;

  border: 1px solid #ffffff6c;
  border-radius: 10px;
  background: #0000006b;
  padding: 30px 50px 0;
  margin: 130px 0 70px;

  & > p {
    background: #0000006b;
    margin: 10px 0;
    padding: 40px 20px;
    font-size: 25px;
  }
`;
const MediaSummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 70px;
  width: 100%;
  height: 500px;
`;
const MediaShortDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 550px;
  overflow: hidden;

  & h2 {
    font-size: 50px;
  }

  & h5 {
    color: #ebebebe8;
    padding-left: 25px;
    background: url("/icons/star.svg");
    background-repeat: no-repeat;
    background-position: left center;
  }

  & ul {
    /* display: flex; */
  }
`;

// #endregion

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h${remainingMinutes}m`;
}

const renderMediaCarouselComponent = (title, data, pathName, styles = null) => {
  const hasData = !!data.length;
  const Card = pathName === PERSON_PATH ? PersonCardSmall : VideoPreviewCard;
  const mediaData = data.map((obj) => createMediaLinkCard(obj));
  return hasData ? (
    <Carousel
      data={mediaData}
      itemCard={(args) => <Card {...args} />}
      pathName={pathName}
      title={title}
    />
  ) : null;
};

const createMediaLinkCard = (props) => {
  const picturePath = props.profile_path
    ? `https://image.tmdb.org/t/p/w200${props.profile_path}`
    : `/icons/no_person_photo.svg`;
  const href = `${PERSON_PATH}${props.id}`;
  const alt = "person photo";

  return { ...props, picturePath, alt, href };
};

function Movie({ movie, recommended, directing, cast, crew }) {
  const {
    videos,
    backdrop_path,
    genres,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    runtime,
    media_type,
    tagline,
    homepage,
  } = movie;

  let trailer = videos.results.filter((movie) => movie.type === "Trailer")[0];

  return (
    <MediaProfileContainer
      backGroundImg={`https://image.tmdb.org/t/p/w1280/${
        backdrop_path || poster_path
      }`}
    >
      <Content>
        <MediaSummarySection>
          <MediaShortDescription>
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <h5>
              {vote_average.toFixed(1)} &middot;{" "}
              {media_type || formatDuration(runtime)} &middot;{" "}
              {release_date?.split("-")[0]}
            </h5>
            {genres && (
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    <Link href={`${GENRE_PATH}/${id}`}>
                      <h4>{name}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <a href={`${homepage}`} target="_blank">
              {homepage}
            </a>

            <SecondaryButton
              text="To Favorites"
              $icon="/icons/to_favorite.svg"
              onClick={() => console.log(123)}
            />
          </MediaShortDescription>

          {!!trailer && (
            <ReactPlayer
              width={500}
              height={300}
              url={`https://www.youtube.com/watch?v=${trailer?.key}`}
            />
          )}
        </MediaSummarySection>
        <p>{overview}</p>
        {renderMediaCarouselComponent("Director", directing, PERSON_PATH)}
        {renderMediaCarouselComponent("Crew", crew, PERSON_PATH)}
        {renderMediaCarouselComponent("Actors", cast, PERSON_PATH)}
        {renderMediaCarouselComponent("Recommended", recommended, MOVIE_PATH)}
      </Content>
    </MediaProfileContainer>
  );
}

export default Movie;

function filterPerson(list, filterBy = []) {
  return list
    .filter(
      ({ popularity, profile_path, known_for_department, job }) =>
        popularity &&
        profile_path &&
        filterBy.includes(job || known_for_department)
    )
    .sort((a, b) => b.popularity - a.popularity);
}

export const getServerSideProps = async (ctx) => {
  try {
    const movie = await getMovieByID(ctx.query.id);
    const recommended = await getRecommended(ctx.query.id);
    const similar = await getRecommended(ctx.query.id);
    const cast = filterPerson(movie.credits.cast, ["Acting"]);
    const directing = filterPerson(movie.credits.crew, ["Director"]);
    const crew = filterPerson(movie.credits.crew, [
      "Music",
      "Writer",
      "Producer",
      "Cinematography",
    ]);

    console.log(movie);
    // console.log(recommended);

    return {
      props: {
        movie,
        recommended: recommended.results,
        similar,
        cast,
        directing,
        crew,
      },
    };
  } catch (error) {
    console.log("ERROR");
  }
};
