import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { CollapsibleContainer, Container } from "@/components";
import Link from "next/link.js";
import { PERSONS_PATH, PERSON_PATH } from "@/utils/constants.js";

const PersonCard = styled.div`
  cursor: pointer;
  padding: 10px;
  /* border: 1px solid #ffffffd8; */
  width: fit-content;

  & a {
    /* display: inline-block; */
  }

  &:hover {
    border-color: #1a1a1a;
    background: #0b0b0b;
  }
`;
const Description = styled.div`
  position: relative;
  width: max-content;
  margin-left: auto;
  padding: 5px 20px;
  text-align: end;
  margin-top: -20px;
  margin-right: -10px;
  background-color: #ccbaba;

  & h6 {
    margin-top: 5px;
    font-weight: 400;
  }
`;

export function TrendingPerson({ trendingPerson }) {
  return (
    <Container>
      <CollapsibleContainer subtitle="Popular Persons" href={`${PERSONS_PATH}`}>
        {trendingPerson.map(
          ({ id, profile_path, name, known_for_department, known_for }) => {
            const picturePath = profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : `/icons/no_person_photo.svg`;
            const alt = "public/icons/no_person_photo.svg";
            const href = `${PERSON_PATH}/${id}`;

            return (
              <Link key={id} href={href} style={{ display: "block" }}>
                <PersonCard key={id}>
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
                    <h5 className="title">{name}</h5>
                    <h6 className="role">{known_for_department}</h6>
                    <h5>{name}</h5>
                    <h6>{known_for_department}</h6>
                  </Description>
                </PersonCard>
              </Link>
            );
          }
        )}
      </CollapsibleContainer>
    </Container>
  );
}
