import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

function Filmography({ video }) {
  const [filterBy, setFilterBy] = useState(null);

  const sorted = filterBy ? video.filter((item) => item[filterBy]) : video;
  return 123;
}

export default Filmography;
