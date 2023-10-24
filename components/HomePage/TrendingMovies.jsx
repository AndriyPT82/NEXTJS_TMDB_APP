// "use client";
import { useState } from "react";
import styled from "styled-components";
import { Controlers, HeroSection, ShortDescriptionCard } from "@/components";
import { MOVIE_PATH } from "@/utils/constants.js";

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export function TrendingMovies({ trending }) {
  const [movies,] = useState(trending);
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const controlers = document.getElementById("controlers");

  //     if (!controlers.matches(":hover")) {
  //       setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  //     }
  //   }, 10000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <HeroSection
      // paddingbottom={"80px"}
      height="80vh"
      img={`https://image.tmdb.org/t/p/w1280/${movies[current].backdrop_path}`}
    >
      <Content>
        <ShortDescriptionCard
          href={`/${MOVIE_PATH}/${trending[current].id}`}
          {...trending[current]}
        />
        <Controlers
          onSetCurrent={setCurrent}
          count={movies.length}
          current={current}
        />
      </Content>
    </HeroSection>
  );
}
