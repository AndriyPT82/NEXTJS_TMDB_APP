"use client";
import Link from "next/link";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 30px;
  border-top: 1px solid #fff;
  padding-top: 40px;

  & ul :active {
    cursor: grabbing;
    gap: 30px;
  }

  & li {
    display: inline-flex;
  }

  & a {
    margin: auto;
    width: min-content;
  }
`;

const responsive = {
  0: { items: 1, itemsFit: "contain" },
  750: { items: 2, itemsFit: "contain" },
  1020: { items: 3, itemsFit: "contain" },
  1140: { items: 4, itemsFit: "contain" },
};

const handleMouseClick = (e) => {
  const eventType = e.type;

  if (eventType === "dragstart") {
    e.preventDefault();
    e.currentTarget.setAttribute("data-dragged", "true");
  } else {
    const isDragged = e.currentTarget.getAttribute("data-dragged") === "true";

    if (isDragged) {
      e.currentTarget.setAttribute("data-dragged", "false");
      e.preventDefault();
    }
  }
};

function Carousel({ data, itemCard, pathName, title }) {
  if (!data || data.length === 0) null;

  const items = data.map((item) => (
    <Link
      key={item.id}
      onDragStart={handleMouseClick}
      onClick={handleMouseClick}
      href={`/${pathName}/${item.id}`}
      // replace={false}
      // style={{ border: '1px solid red'}}
    >
      {itemCard(item)}
    </Link>
  ));

  return (
    <CarouselContainer>
      <h2>{title}</h2>
      <AliceCarousel
        keyboardNavigation={true}
        mouseTracking
        responsive={responsive}
        items={items}
        disableButtonsControls
      />
    </CarouselContainer>
  );
}
export default Carousel;
