/** @jsxImportSource theme-ui */
import { Box, Image, Heading, Paragraph } from "theme-ui";

const Media = () => {
  return (
    <Box>
      <Image src="" />
      <Heading
        as="h3"
        sx={{
          variant: "text.h3",
        }}
      >
        Test
      </Heading>
      <Paragraph
        mt={2}
        sx={{
          variant: "text.xs",
        }}
      >
        By Frank Darabont
      </Paragraph>
    </Box>
  );
};

export default Media;
