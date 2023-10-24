"use client";
import styled, { css } from "styled-components";

const DefaultStyle = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: max-content;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;

  ${({$icon}) =>
    $icon &&
    css`
      gap: 10px;
      &::before {
        content: "";
        width: ${({ width }) => (width ? width : "24px")};
        height: ${({ height }) => (height ? height : "24px")};
        background-image: url(${({ $icon }) => $icon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    `}

  &:hover {
    opacity: 1;
  }
`;

const PrimaryStyle = styled(DefaultStyle)`
  padding-inline: 24px;
  background-color: #00925d;
`;

const SecondaryStyle = styled(DefaultStyle)`
  padding-inline: 24px;
  border: 1px solid #c4c4c4;
`;

export { PrimaryStyle, SecondaryStyle, DefaultStyle };
