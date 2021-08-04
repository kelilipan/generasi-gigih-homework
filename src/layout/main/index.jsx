import { Flex } from "@chakra-ui/layout";

const Main = ({ children, style }) => {
  return (
    <Flex
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "1em",
        paddingTop: "65px",
        ...style,
      }}
    >
      {children}
    </Flex>
  );
};

export default Main;
