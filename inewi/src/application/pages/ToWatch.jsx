/** @jsxImportSource theme-ui */
import { useRecoilValue } from "recoil";
import { Message, Container } from "theme-ui";
import { toWatchListState } from "../abstract/MovieContext";
import MediaList from "../components/MediaList";

const ToWatch = () => {
  const list = useRecoilValue(toWatchListState);

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

export default ToWatch;
