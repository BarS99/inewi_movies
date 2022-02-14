/** @jsxImportSource theme-ui */
import { useRecoilValue } from "recoil";
import { Message, Container } from "theme-ui";
import { favoriteListState } from "../abstract/MovieContext";
import MediaList from "../components/MediaList";

const Favorite = () => {
  const list = useRecoilValue(favoriteListState);

  return (
    <>
      {list?.length ? (
        <MediaList list={list} />
      ) : (
        <Container p={4} sx={{ variant: "container.full" }}>
          <Message variant="message.secondary">The list is empty!</Message>
        </Container>
      )}
    </>
  );
};

export default Favorite;
