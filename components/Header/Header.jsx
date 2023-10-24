"use client";
import { Navigation, Search, Auth, Container } from "../index.js";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  max-width: inherit;
  width: inherit;
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ffffff3c;
  transition: 0.2s;
`;

const Content = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchAuthBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const HeaderLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url("/logo.svg");
  background-size: 120%;
  background-position: center;
  border: 1px solid #555555;
`;

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Content>
          <HeaderLogo />
          <Navigation />
          <SearchAuthBlock>
            <Search />
            <Auth />
          </SearchAuthBlock>
        </Content>
      </Container>
    </StyledHeader>
  );
}
