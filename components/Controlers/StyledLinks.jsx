"use client";
import styled from "styled-components";
import {
  PrimaryStyle,
  SecondaryStyle,
  DefaultStyle,
} from "./StyledControlerWrapper";
import Link from "next/link";

// #region STYLES
const StyledLink = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
`;

const PrimaryLink = ({ href, text = "", ...props }) => {
  return (
    <PrimaryStyle {...props}>
      <StyledLink href={href}>{text}</StyledLink>
    </PrimaryStyle>
  );
};

const SecondaryLink = ({ text = "", ...props }) => {
  return (
    <SecondaryStyle {...props}>
      <StyledLink>{text}</StyledLink>
    </SecondaryStyle>
  );
};
// #endregion

const IconLink = ({ ...props }) => {
  return (
    <DefaultStyle {...props}>
      <StyledLink />
    </DefaultStyle>
  );
};

export { PrimaryLink, SecondaryLink, IconLink };
