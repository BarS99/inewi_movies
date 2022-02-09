/** @jsxImportSource theme-ui */
import React from "react";
import { Grid } from "theme-ui";
import Media from "./Media";

const MediaList = () => {
  return (
    <Grid
      p={4}
      gap={2}
      sx={{
        variant: "grid.mediaList",
      }}
    >
      <Media />
    </Grid>
  );
};

export default MediaList;
