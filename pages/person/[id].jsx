import styled from "styled-components";
import { getPersonById } from "@/utils/requests";
import { Container, PersonCardDetail } from "@/components/index";

// #region Styles
const PersonContainer = styled.div`
  padding: 100px 0;
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
  height: 100vh;
`;

const Content = styled.div`
  padding: 70px 40px 20px;
  background: #4c4c4cac;
  border-radius: 10px;
`;
// #endregion

// const createLink = (props) => {
//   const picturePath = props.profile_path
//     ? `https://image.tmdb.org/t/p/w200${props.profile_path}`
//     : `/icons/no_person_photo.svg`;
//   const href = `/person/${props.id}`;
//   const alt = `person photo ${props.name}`;
//   const obj = { ...props, picturePath, alt, href };

//   return obj;
// };

function Person({ person }) {
  return (
    <PersonContainer
      $img={`https://image.tmdb.org/t/p/w780/${person.movie_credits.cast[0].profile_path}`}
    >
      <Container>
        <Content>
          <PersonCardDetail person={person} {...person} />
        </Content>
      </Container>
    </PersonContainer>
  );
}

export default Person;

export const getServerSideProps = async (ctx) => {
  try {
    const person = await getPersonById(ctx.query.id);
    const asActor = person.movie_credits.cast;
    const asCrew =
      person.known_for_department === "Acting"
        ? person.movie_credits.cast
        : person.movie_credits.crew;
    const knownFor = asCrew
      .filter((item) => item.vote_count > 5000)
      .sort((a, b) => {
        return +b.vote_average - +a.vote_average;
      }) || [{}];

    console.log(person);
    return {
      props: {
        person: { ...person, knownFor },
      },
    };
  } catch (error) {
    console.log("ERROR");
  }
};
