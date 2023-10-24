import React from "react";
import { styled } from "styled-components";
import { Container } from "./index.js";

const Content = styled.div`
  position: relative;
  display: flex;
  background-image: url(${({ $img }) => $img});
  background-position: bottom;
  background-size: cover;
  height: ${({ $height }) => $height};
  min-height: 650px;
  max-height: 700px;
  overflow: auto;


  /* border: 1px solid #c41a1a; */

  & > :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

function HeroSection({ paddingbottom, height, img, children }) {
  return (
    <Content $paddingbottom={paddingbottom} $height={height} $img={img}>
      <Container>{children}</Container>
    </Content>
  );
}

export default HeroSection;
