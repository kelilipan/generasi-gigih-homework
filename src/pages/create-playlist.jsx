import Tracklist from "../components/tracklist";
import Main from "../layout/main";

const Index = () => {
  return (
    <Main>
      <h1 style={{ fontSize: "44px" }}>Select tracks</h1>
      <Tracklist />
    </Main>
  );
};

export default Index;
