"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ShortDescriptionCard, HeroSection } from "@/components";
import { MOVIE_PATH } from "@/utils/constants";
import { SectionTitle } from "@/globalstyles";
import UpcomingSlider from "./UpcomingSlider";

// #region STYLES
const UpcomingSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  margin: 20px 0 80px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 80px;
`;
// #endregion

export function UpcomingMovies({ upcoming }) {
  const [selectedMovieId, setSelectedMovieId] = useState(upcoming[0].id);
  const [forDisplay, setForDisplay] = useState(upcoming);

  useEffect(() => {
    const movieIndex = upcoming.findIndex(({ id }) => id === selectedMovieId);
    setForDisplay([
      ...upcoming.slice(movieIndex),
      ...upcoming.slice(0, movieIndex),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMovieId]);

  return (
    <HeroSection
      img={`https://image.tmdb.org/t/p/w1280/${forDisplay[0].backdrop_path}`}
    >
      <UpcomingSection>
        <SectionTitle>Upcoming</SectionTitle>
        <Content>
          <ShortDescriptionCard
            href={`/${MOVIE_PATH}/${forDisplay[0].id}`}
            contentWidth={500}
            {...forDisplay[0]}
          />

          <UpcomingSlider
            current={selectedMovieId}
            movies={forDisplay}
            onSetCurrent={setSelectedMovieId}
          />
        </Content>
      </UpcomingSection>
    </HeroSection>
  );
}
