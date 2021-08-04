import { Avatar, Flex, Link } from "@chakra-ui/react";
const Profile = ({ userData }) => {
  const isLoading = userData.display_name === undefined;
  const { external_urls, display_name, images } = userData;
  return isLoading ? (
    <Flex>Loading...</Flex>
  ) : (
    <Flex
      d={["none", null, "flex"]}
      bgColor="rgba(138, 138, 138, 0.5)"
      borderRadius="full"
      alignItems="center"
      ml="auto"
    >
      <Avatar src={images[0]?.url} name={display_name} />
      <Link mx="2" fontSize="sm" href={external_urls.spotify}>
        {display_name}
      </Link>
    </Flex>
  );
};

export default Profile;
