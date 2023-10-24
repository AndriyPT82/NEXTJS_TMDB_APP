import React, { useState } from "react";
import styled from "styled-components";
import { NavigateLink, PrimaryButton } from "@/components";

// #region Styles
const CollapsedContainer = styled.div`
  margin: 40px 0;
  height: 100%;

  & h2 {
    font-size: 60px;
    margin-bottom: 40px;
    overflow: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
  }
`;

const ContentContainer = styled.div`
  transition: 1s;
  height: ${({ $isOpen = false }) => ($isOpen ? "100%" : "450px")};
  overflow: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  gap: 20px;
`;

const actionStyles = {
  maxWidth: "100%",
  width: "100%",
  justifyContent: "center",
  marginTop: "20px",
};
// #endregion

function CollapsibleContainer({ subtitle = "", href, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapsedContainer>
      <h2>{subtitle}</h2>
      <ContentContainer $isOpen={isOpen}>
        <Content>{children}</Content>
      </ContentContainer>

      {!isOpen ? (
        <PrimaryButton
          text="Show More"
          style={actionStyles}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <NavigateLink href={href} text="Show More" style={actionStyles} />
      )}
    </CollapsedContainer>
  );
}

export default CollapsibleContainer;
