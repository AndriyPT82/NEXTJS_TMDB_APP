"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { NavigateLink, SecondaryButton, VideoPreviewCard } from "@/components";
import { PrimaryLink } from "../Controlers/StyledLinks";
import { MOVIE_PATH } from "@/utils/constants";

const PersonContainer = styled.div`
  position: relative;
  border-radius: 15px;
  max-width: 100%;
`;

const PersonInfo = styled.div`
  display: flex;
  max-width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #fff;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 10px;
  margin-left: 20px;
  overflow: auto;

  & h2 {
    font-size: 2.2rem;
  }

  & p {
    line-height: 1.3rem;
    max-height: 150px;
    overflow-y: auto;
    margin-top: 10px;
  }

  & h5 {
    padding-left: 25px;
    background: url("/icons/star.svg");
    background-repeat: no-repeat;
    background-position: left center;
    opacity: 0.7;
  }
`;

const KnowFor = styled.div`
  margin-top: auto;

  & h4 {
    margin-bottom: 10px;
  }
  & ul {
    display: flex;
    gap: 5px;
    overflow: auto;
    padding-bottom: 5px;
  }
`;

const Filmography = styled.div`
  padding-top: 20px;
  & h2 {
    font-size: 2.2rem;
  }

  & ul {
  }

  & li {
    display: flex;
    width: max-content;
    margin-bottom: 30px;
  }

  & p {
    margin-top: 20px;
    max-width: 500px;
    display: -webkit-box;
  -webkit-line-clamp: 3; /* Задайте бажану кількість рядків */
  -webkit-box-orient: vertical;
  overflow: hidden;
  }

  & > div {
    border: 1px solid red;
  }
`;

const ShortDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;

  margin-left: 30px;
  margin-top: 30px;
  /* gap: 10px; */

  & > h4 {
    font-weight: 400;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-block: 20px;
  gap: 20px;
`;

const createLink = (props) => {
  const picturePath = props.profile_path
    ? `https://image.tmdb.org/t/p/w200${props.profile_path}`
    : `/icons/no_person_photo.svg`;
  const href = `/person/${props.id}`;
  const alt = `person photo ${props.name}`;
  const obj = { ...props, picturePath, alt, href };

  return obj;
};

export function PersonCardDetail({
  person,
  id,
  biography,
  birthday,
  deathday,
  place_of_birth,
  name,
  profile_path,
  knownFor,
  movie_credits,
}) {
  console.log(person);
  return (
    <PersonContainer>
      <PersonInfo>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`person picture ${name}`}
          width={350}
          height={500}
          style={{ borderRadius: "2%" }}
        />
        <InfoBlock>
          <h2> {name}</h2>
          <h4>{birthday}</h4>
          <h4>{deathday}</h4>
          <h4>{place_of_birth}</h4>
          <p>{biography}</p>

          <KnowFor>
            <h4>Known for:</h4>
            <ul>
              {knownFor.slice(0, 6).map((movie) => (
                <li key={movie.id}>
                  <VideoPreviewCard
                    posterHeight={180}
                    posterWidth={120}
                    withInfo={false}
                    {...createLink(movie)}
                  />
                </li>
              ))}
            </ul>
          </KnowFor>
        </InfoBlock>
      </PersonInfo>
      <Filmography>
        <ul>
          {movie_credits.cast.map((movie, i) => (
            <li key={movie.id}>
              <>
                <h5>{i + 1}</h5>
                <VideoPreviewCard
                  posterHeight={280}
                  posterWidth={170}
                  withInfo={false}
                  {...createLink(movie)}
                />
                <ShortDescription>
                  <h3>{movie.title}</h3>
                  <h5>release : {movie.release_date || "Unknown"}</h5>
                  <h5>rank : {movie.vote_average || "Unknown"}</h5>
                  <h5>character : {movie.character || "Unknown"}</h5>
                  <p>{movie.overview}</p>
                  <Buttons>
                    <NavigateLink
                      href={`/${MOVIE_PATH}/${movie.id}`}
                      text="Read More"
                      $icon="/icons/read_more.svg"
                    />
                    <SecondaryButton
                      text="To Favorites"
                      $icon="/icons/to_favorite.svg"
                      onClick={() =>
                        window.alert("Set to Favorites (Under Development)")
                      }
                    />
                  </Buttons>
                </ShortDescription>
              </>
            </li>
          ))}
        </ul>
      </Filmography>
    </PersonContainer>
  );
}
