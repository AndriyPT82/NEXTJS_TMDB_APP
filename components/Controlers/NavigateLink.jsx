"use client";
import Link from "next/link";
import { PrimaryStyle } from "./StyledControlerWrapper";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  text-decoration: none;
`;

const NavigateLink = ({ text = "", href = "", styles, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      <PrimaryStyle {...props}>{text}</PrimaryStyle>
    </StyledLink>
  );
};

export default NavigateLink;
