import { Heading } from "@chakra-ui/react";
import Tracklist from "../components/tracklist";
import Main from "../layout/main";

const Index = () => {
  return (
    <Main>
      <Heading my="4" fontSize="4xl">
        Select tracks
      </Heading>
      <Tracklist />
    </Main>
  );
};

export default Index;
