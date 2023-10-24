import { Container } from "@/globalstyles";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  background-image: url(${({ $backGroundImg }) => $backGroundImg});
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  overflow: auto;

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

function MediaProfileContainer({ children, backGroundImg }) {
  return (
    <Content $backGroundImg={backGroundImg}>
      <Container>{children}</Container>
    </Content>
  );
}

export default MediaProfileContainer;
