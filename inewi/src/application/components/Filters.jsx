import {
  Label,
  Input,
  Select,
  Slider,
  Box,
  Flex,
  Button,
  Container,
  Grid,
  Heading,
} from "theme-ui";

const Filters = () => {
  return (
    <Container
      sx={{
        variant: "container.md",
      }}
      p={4}
    >
      <Box
        as="section"
        p={[3, 4]}
        sx={{
          borderWidth: "sm",
          borderStyle: "solid",
          borderColor: "backgroundContrast",
        }}
      >
        <Heading mb={4}>Filters</Heading>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Grid columns={[1, 2, 3]} gap={[3, null, 4]}>
            <Box>
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" mb={3} />
            </Box>
            <Box>
              <Label htmlFor="genre">Genre</Label>
              <Select name="genre" id="genre" mb={3}>
                <option>Beep</option>
                <option>Boop</option>
                <option>Blip</option>
              </Select>
            </Box>
            <Box>
              <Label htmlFor="year">Year</Label>
              <Slider min={1900} max={2025} id="year" />
            </Box>
          </Grid>
          <Flex
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Button mt={3}>Submit</Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Filters;
