import styled from "styled-components";
import {
  HeroSection,
  CollapsibleContainer,
  Container,
  MovieCardMain,
  VideoPreviewCard,
} from "@/components";
import { getTVSerieByID } from "@/utils/requests";
import { PERSON_PATH } from "@/utils/constants";
import Image from "next/image";

// #region Styles
const PersonCard = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #1a1a1a16;

  &:hover {
    border-color: #1a1a1a;
    background: #0b0b0b;
  }
`;
const Description = styled.div`
  text-align: center;

  & h6 {
    margin-top: 5px;
    font-weight: 400;
  }
`;
const BannerContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 200px;
  height: 80vh;
  padding-bottom: 50px;
`;
const Overview = styled.div`
  padding: 20px 0;
  & > h2 {
    font-size: 25px;
  }
  & > p {
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #fff;
    margin: 10px 0;
    padding-block: 40px;
    font-size: 25px;
  }
`;
// #endregion

function Movie({ tvSerie, similar = [], cast, crew }) {
  const {
    id,
    backdrop_path,
    genres,
    name: title,
    overview,
    poster_path,
    release_date,
    vote_average,
    runtime,
    media_type,
    tagline,
    homepage,
  } = tvSerie;

  return (
    <>
      <HeroSection img={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}>
        <BannerContent>
          <MovieCardMain {...tvSerie} />

          <VideoPreviewCard
            withInfo={false}
            posterHeight="500px"
            posterWidth="310px"
            {...tvSerie}
          />
        </BannerContent>
      </HeroSection>
      <Container>
        <Overview>
          <h2>Description of movie:</h2>
          <p>{overview}</p>
        </Overview>
        <CollapsibleContainer subtitle="Cast:" href={PERSON_PATH}>
          {crew.map(
            ({ id, profile_path, name, known_for_department, known_for }) => (
              <PersonCard key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `/icons/no_person_photo.svg`
                  }
                  alt={"public/icons/no_person_photo.svg"}
                  height={200}
                  width={200}
                  style={{
                    objectFit: "cover",
                    objectPosition: "0px -20px",
                    borderRadius: "50%",
                  }}
                />
                <Description>
                  <h5 className="title">{name}</h5>
                  <h6 className="role">{known_for_department}</h6>
                </Description>
              </PersonCard>
            )
          )}
        </CollapsibleContainer>
      </Container>
    </>
  );
}

export default Movie;

function filterPerson(list, filterBy = []) {
  return list
    .filter(
      ({ popularity, profile_path, department }) =>
        popularity && profile_path && filterBy.includes(department)
    )
    .sort((a, b) => b.popularity - a.popularity);
}

export const getServerSideProps = async (ctx) => {
  try {
    const tvSerie = await getTVSerieByID(ctx.query.id);
    // const similar = await getSimilar(ctx.query.id);
    const cast = filterPerson(tvSerie.credits.cast, ["acting"]);
    const crew = filterPerson(tvSerie.credits.crew, [
      "Sound",
      "Directing",
      "Writing",
    ]);
    return {
      props: {
        tvSerie,
        // similar,
        cast,
        crew,
      },
    };
  } catch (error) {
    console.log("ERROR");
  }
};
