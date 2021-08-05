import { Flex } from "@chakra-ui/layout";

const Main = ({ children, ...props }) => {
  return (
    <Flex mb="80px" flex="1" flexDir="column" px={4} pt="75px" {...props}>
      {children}
    </Flex>
  );
};

export default Main;
