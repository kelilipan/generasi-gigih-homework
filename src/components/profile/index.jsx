import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const Profile = ({ userData, handleLogout }) => {
  const isLoading = userData.display_name === undefined;
  const { display_name, images } = userData;
  const menuItem = {
    bg: "#282828",
    _focus: { bgColor: "blackAlpha.400" },
    _hover: { bgColor: "blackAlpha.400" },
  };
  return isLoading ? (
    <Flex
      ml="auto"
      d={["none", null, "flex"]}
      alignItems="center"
      borderRadius="full"
      bgColor="rgba(138, 138, 138, 0.5)"
      minH="48px"
    >
      Loading...
    </Flex>
  ) : (
    <Flex
      d={["none", null, "flex"]}
      bgColor="rgba(138, 138, 138, 0.5)"
      borderRadius="full"
      alignItems="center"
      ml="auto"
    >
      <Avatar src={images[0]?.url} name={display_name} />
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton mx="2" isActive={isOpen}>
              {display_name}
            </MenuButton>
            <MenuList bg="#282828" border="none">
              <MenuItem {...menuItem} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default Profile;
