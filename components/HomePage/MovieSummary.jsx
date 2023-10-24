// "use client";
import React from "react";
import styled from "styled-components";
import { SecondaryButton, NavigateLink } from "../index.js";
import Link from "next/link.js";

const MovieInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 550px;
  overflow: hidden;

  & h5 {
    color: #ebebebe8;
    padding-left: 25px;
    background: url("/icons/star.svg");
    background-repeat: no-repeat;
    background-position: left center;
  }

  & p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: pre-wrap;
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
`;

const GenresList = styled.div`
  display: flex;
  gap: 10px;
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

export function MovieSummary({
  id,
  title,
  overview,
  genres = null,
  vote_average,
  release_date,
  media_type,
  runtime,
  tagline,
}) {
  return (
    <MovieInfoContainer>
      <Title>{title}</Title>
      <h3>{tagline}</h3>
      <h5>
        {vote_average.toFixed(1)} &middot;{" "}
        {media_type || formatDuration(runtime)} &middot;{" "}
        {release_date?.split("-")[0]}
      </h5>
      <GenresList>
        {genres &&
          genres.map(({ id, name }, index) => (
            <Link key={id} href={`genre/${id}`}>
              <h4>{name}</h4>
            </Link>
          ))}
      </GenresList>
      {overview && <p>{overview}</p>}
      <ButtonsContainer>
        <NavigateLink
          href={`/movie/${id}`}
          text="Read More"
          $icon="/icons/read_more.svg"
        />
        <SecondaryButton
          text="To Favorites"
          $icon="/icons/to_favorite.svg"
          onClick={() => console.log(123)}
        />
      </ButtonsContainer>
    </MovieInfoContainer>
  );
}
