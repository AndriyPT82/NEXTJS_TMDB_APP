import styled from "styled-components";

const MediaCard = styled.div`
  position: relative;
  display: flex;
  /* flex-shrink: 1; */
  flex-direction: column;
  cursor: pointer;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  border: 1px solid #b7b7b7;
  overflow: hidden;
  border-radius: 15px;
`;

const BackgroundPicture = styled.div`
  flex: 1;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: bottom;
`;

const Info = styled.div`
  border-top: 1px solid white;
  padding: 10px 0px 10px 20px;
  background: #2e2e2e;
  text-align: start;

  & h4 {
    font-size: 13px;
    margin-bottom: 5px;
  }

  & h5 {
    padding-left: 25px;
    background: url("/icons/star.svg");
    background-repeat: no-repeat;
    background-position: left center;
    opacity: 0.7;
  }
`;

export function VideoPreviewCard({
  title,
  vote_average,
  poster_path,
  posterHeight = 400,
  posterWidth = 250,
  withInfo = true,
}) {
  return (
    <MediaCard height={posterHeight} width={posterWidth}>
      <BackgroundPicture
        $img={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      {withInfo && (
        <Info>
          <h4>{title || "No title"}</h4>
          <h5>{vote_average?.toFixed(1)} | comedy</h5>
        </Info>
      )}
    </MediaCard>
  );
}
