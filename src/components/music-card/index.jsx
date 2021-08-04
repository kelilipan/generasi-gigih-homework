import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
const MusicCard = ({ data, isSelected, handleSelect }) => {
  const { album, artists, external_urls, name } = data;
  //notice that one music can have more than 1 artist
  const artistText = artists.map((artist, idx) => {
    const isLast = idx === artists.length - 1;
    const text = isLast ? artist.name : artist.name + ", ";
    return (
      <Link isExternal href={artist.external_urls.spotify} key={artist.id}>
        {text}
      </Link>
    );
  });
  const buttonSize = useBreakpointValue(["sm", "md"]);
  return (
    <Flex
      role="group"
      p="2"
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="5px"
      transition="all ease 0.15s"
      gridGap={4}
      _hover={{
        bgColor: "#272727",
      }}
    >
      <Flex boxSize={["80px", "125px"]}>
        <Link isExternal href={album.external_urls.spotify}>
          <Image
            boxSize={["80px", "125px"]}
            src={album.images[1].url}
            alt={album.name}
          />
        </Link>
      </Flex>
      <Flex flex={1} flexDir="column" justifyContent="space-between">
        <Flex flexDir="column">
          <Text as="h4" fontWeight="bold" fontSize={["sm", "md"]} noOfLines={2}>
            <Link isExternal href={external_urls.spotify}>
              {name}
            </Link>{" "}
            - {artistText}
          </Text>
          <Text as="h5" fontSize={["sm", "md"]} noOfLines={1}>
            <Link isExternal href={album.external_urls.spotify}>
              {album.name}
            </Link>
          </Text>
        </Flex>
        <Flex>
          <Button
            size={buttonSize}
            colorScheme={isSelected ? "gray" : "brand"}
            color={isSelected ? "gray.700" : "inherit"}
            variant="solid"
            onClick={() => handleSelect(data.uri)}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MusicCard;
