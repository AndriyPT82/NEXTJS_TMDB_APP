import styled from "styled-components";
import { NavigateLink, SecondaryButton } from "@/components";
import { MOVIE_PATH } from "@/utils/constants";

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* max-width: 550px; */
  max-width: ${({ $contentWidth }) => `${$contentWidth}px`};
  overflow: hidden;

  & h2 {
    font-size: 50px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
  }

  & h5 {
    color: #ebebebe8;
    padding-left: 25px;
    background: url("/icons/star.svg");
    background-repeat: no-repeat;
    background-position: left center;
  }

  & ul {
    display: flex;
    gap: 10px;
  }

  & p {
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: pre-wrap;
    overflow: hidden;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h${remainingMinutes}m`;
}

export function ShortDescriptionCard({
  id,
  title,
  tagline,
  overview,
  runtime,
  media_type = "",
  vote_average,
  release_date,
  contentWidth = 500,
}) {
  return (
    <Content $contentWidth={contentWidth}>
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <h5>
        {vote_average.toFixed(1)} &middot; {release_date?.split("-")[0]}
      </h5>
      {overview && <p>{overview}</p>}

      <ButtonsContainer>
        <NavigateLink
          href={`/${MOVIE_PATH}/${id}`}
          text="Read More"
          $icon="/icons/read_more.svg"
        />
        <SecondaryButton
          text="To Favorites"
          $icon="/icons/to_favorite.svg"
          onClick={() => window.alert("Set to Favorites (Under Development)")}
        />
      </ButtonsContainer>
    </Content>
  );
}
