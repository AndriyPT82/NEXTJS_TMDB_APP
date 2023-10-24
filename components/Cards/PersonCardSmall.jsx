import styled from "styled-components";
import Image from "next/image";

const PersonCard = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #1a1a1a16;

  width: auto;

  &:hover {
    border-color: #1a1a1a;
    background: #5c5555;
  }
`;
const Description = styled.div`
  text-align: center;

  & h6 {
    margin-top: 5px;
    font-weight: 400;
  }
`;

export function PersonCardSmall({
  picturePath,
  id,
  name,
  known_for_department,
  alt,
}) {
  return (
    <PersonCard>
      <Image
        src={picturePath}
        alt={alt}
        height={250}
        width={170}
        style={{
          borderRadius: "2%",
        }}
      />
      <Description>
        <h5>{name}</h5>
        <h6>{known_for_department}</h6>
      </Description>
    </PersonCard>
  );
}
