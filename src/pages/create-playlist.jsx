import { Flex, Heading, Link } from "@chakra-ui/react";
import Pagination from "../components/pagination";
import Player from "../components/player";
import Tracklist from "../components/tracklist";
import Main from "../layout/main";
import { useTracklist } from "../lib/useTracklist";

const Index = () => {
  const {
    tracklist,
    handleTopTracks,
    handleSearch,
    isTopTrack,
    currentQuery,
    currentPage,
    maxLength,
  } = useTracklist();
  const isTrackEmpty = tracklist.length > 0;
  const handlePagination = (index) => {
    if (isTopTrack) {
      handleTopTracks(index);
    } else {
      handleSearch(currentQuery, index);
    }
  };
  return (
    <>
      <Main>
        <Flex
          my={[2, 4]}
          direction={["column", "row"]}
          alignItems={["flex-start", "center"]}
        >
          <Heading m="0" mr="2" fontSize={["3xl", "4xl"]}>
            Select tracks
          </Heading>
          <Link
            fontSize="sm"
            href="#top-tracks"
            onClick={() => handleTopTracks(1)}
          >
            (Show top tracks)
          </Link>
          {isTrackEmpty && (
            <Pagination
              ml="auto"
              currentPage={currentPage}
              maxLength={maxLength}
              handleChangePage={handlePagination}
            />
          )}
        </Flex>
        <Tracklist />
        {isTrackEmpty && (
          <Pagination
            currentPage={currentPage}
            maxLength={maxLength}
            handleChangePage={handlePagination}
            mt="4"
            ml="auto"
          />
        )}
      </Main>
      <Player />
    </>
  );
};

export default Index;
