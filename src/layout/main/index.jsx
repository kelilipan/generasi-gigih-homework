import { Flex } from "@chakra-ui/layout";

const Main = ({ children, ...props }) => {
  return (
    <Flex
      mb={["180px", "180px", "120px"]}
      flex="1"
      flexDir="column"
      px={4}
      pt={["60px", "75px"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Main;
