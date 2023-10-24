"use client";
import styled from "styled-components";
import { PrimaryStyle, SecondaryStyle, DefaultStyle } from "./StyledControlerWrapper";

const StyledButton = styled.button`
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


const PrimaryButton = ({ text = "", ...props }) => {
  return (
    <PrimaryStyle {...props}>
      <StyledButton>{text}</StyledButton>
    </PrimaryStyle>
  );
};

const SecondaryButton = ({ text = "", ...props }) => {
  return (
    <SecondaryStyle {...props}>
      <StyledButton>{text}</StyledButton>
    </SecondaryStyle>
  );
};

const IconButton = ({ ...props }) => {
  return (
    <DefaultStyle {...props}>
      <StyledButton />
    </DefaultStyle>
  );
};

export { PrimaryButton, SecondaryButton, IconButton };
