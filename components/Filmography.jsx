import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  padding: 0 30px;
  max-width: 1280px;
  width: 100%;
`;

function Filmography({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Filmography;
