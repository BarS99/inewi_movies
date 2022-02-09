/** @jsxImportSource theme-ui */
import React from "react";
import { Container, Image } from "theme-ui";
import image576 from "../../static/images/mainpage_576.jpg";
import image992 from "../../static/images/mainpage_992.jpg";
import image1920 from "../../static/images/mainpage_1920.jpg";
import MediaList from "../components/MediaList";
import Filters from "../components/Filters";

const Index = () => {
  return (
    <Container sx={{ variant: "container.full" }}>
      <Image
        src={image1920}
        srcSet={`${image576} 576w, ${image992} 992w, ${image1920} 1920w`}
        sizes="(max-width: 576px) 576w, (max-width: 992px) 992w, 1920w"
        sx={{
          variant: "images.main",
        }}
      />
      <Filters />
      <MediaList />
    </Container>
  );
};

export default Index;
