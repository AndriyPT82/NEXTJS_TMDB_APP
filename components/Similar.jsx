import { VideoPreviewCard } from "@/components";
import Link from "next/link";

function Similar({ list }) {
  return list.map((item) => (
    <Link key={item.id} href={`${item.id}`}>
      <VideoPreviewCard {...item} />
    </Link>
  ));
}

export default Similar;
