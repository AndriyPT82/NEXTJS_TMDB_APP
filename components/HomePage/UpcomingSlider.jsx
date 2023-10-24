"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { VideoPreviewCard } from "@/components";

// #region STYLES
const SliderContainer = styled.div`
  max-width: 700px;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
`;
const Content = styled.ul`
  position: relative;
  height: 400px;
  transition: 2s;

  & li {
    position: absolute;
    cursor: pointer;
  }
`;
// #endregion

function UpcomingSlider({ movies, onSetCurrent }) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollLeft = 0;
  }, [movies]);

  return (
    <SliderContainer ref={containerRef}>
      <Content>
        {movies.map((movie, index) => (
          <li
            key={movie.id}
            onClick={() => onSetCurrent(movie.id)}
            style={{
              left: 250 * index + 20 * index,
            }}
          >
            <VideoPreviewCard withInfo={false} {...movie} />
          </li>
        ))}
      </Content>
    </SliderContainer>
  );
}

export default UpcomingSlider;
