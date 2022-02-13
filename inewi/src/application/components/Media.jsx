/** @jsxImportSource theme-ui */
import { Box, Image, Heading, Paragraph } from "theme-ui";
import { Link } from "react-router-dom";
import { API } from "../../static/API";
import thumbnail from "../../static/images/thumbnail.jpg";

const Media = ({ item }) => {
  return (
    <Box as="article">
      <Link to={`/media/${item.id}`}>
        <Image
          src={
            item.poster_path !== null
              ? `${API.poster}${item.poster_path}`
              : thumbnail
          }
          alt={item.title}
          mb={2}
          sx={{
            borderRadius: "md",
            borderWidth: "sm",
            borderColor: "text",
            borderStyle: "solid",
            overflow: "hidden",
            display: "block",
            aspectRatio: "500 / 750",
            objectFit: "cover",
          }}
        />
      </Link>
      <Box>
        <Heading
          as="h3"
          sx={{
            variant: "text.h3",
          }}
        >
          <Link
            to={`/media/${item.id}`}
            sx={{
              variant: "text.inherit",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            {item.title}
          </Link>
        </Heading>
        <Box mt={2}></Box>
        <Paragraph
          sx={{
            variant: "text.xs",
          }}
        >
          Release date: {item.release_date}
        </Paragraph>
        <Paragraph
          sx={{
            variant: "text.xs",
          }}
        >
          Rating: {item.vote_average}
        </Paragraph>
      </Box>
    </Box>
  );
};

export default Media;
