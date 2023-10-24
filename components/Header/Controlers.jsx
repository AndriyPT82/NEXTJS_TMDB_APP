"use client";
import React, { useRef }from "react";
import styled from "styled-components";

const ControlersContainer = styled.div`
  right: 40px;
  bottom: 100px;
  display: flex;
  gap: 15px;
`;

const Controler = styled.div`
  cursor: pointer;
  height: 15px;
  width: 15px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #d9d0d0;
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
`;

export function Controlers({ count = 5, current = 0, onSetCurrent }) {
  return (
    <ControlersContainer id="controlers">
      {new Array(count).fill(0).map((_, index) => (
        <React.Fragment key={index}>
          <Controler
            $active={current === index}
            onClick={() => onSetCurrent(index)}
          />
        </React.Fragment>
      ))}
    </ControlersContainer>
  );
}
