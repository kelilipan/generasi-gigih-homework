import { Heading, Stack } from "@chakra-ui/react";
import Pagination from "../components/pagination";
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
    <Main>
      <Stack
        my={[2, 4]}
        direction={["column", "row"]}
        justifyContent="space-between"
      >
        <Heading m="0" fontSize="4xl">
          Select tracks
        </Heading>
        {isTrackEmpty && (
          <Pagination
            ml="auto"
            currentPage={currentPage}
            maxLength={maxLength}
            handleChangePage={handlePagination}
          />
        )}
      </Stack>
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
  );
};

export default Index;
