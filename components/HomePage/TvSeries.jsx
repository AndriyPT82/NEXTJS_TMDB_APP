import { CollapsibleContainer, Container, VideoPreviewCard } from "@/components";
import Link from "next/link.js";
import { SERIES_PATH, SERIE_PATH } from "@/utils/constants.js";

export function TvSeries({ tvSeries }) {
  return (
    <Container>
      <CollapsibleContainer subtitle="Popular Tv Series" href={`${SERIES_PATH}`}>
        {tvSeries.map((serie) => (
          <Link href={`/${SERIE_PATH}/${serie.id}`} key={serie.id}>
            <VideoPreviewCard title={serie.original_name} {...serie} />
          </Link>
        ))}
      </CollapsibleContainer>
    </Container>
  );
}
