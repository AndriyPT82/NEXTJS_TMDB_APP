import { Carousel, Container, VideoPreviewCard } from "@/components";
import { MOVIE_PATH } from "@/utils/constants";
import { SectionTitle } from "@/globalstyles";

export function NowPlaying({ nowPlaying }) {
  return (
    <Container>
      <SectionTitle>Now Playing</SectionTitle>
      <Carousel
        data={nowPlaying}
        itemCard={(args) => <VideoPreviewCard {...args} />}
        pathName={MOVIE_PATH}
      />
    </Container>
  );
}
