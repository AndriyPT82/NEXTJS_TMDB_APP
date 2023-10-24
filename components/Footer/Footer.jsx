import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: #9c9c9c;
  border: 1px solid black;
  font-size: 100px;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
