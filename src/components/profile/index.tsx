import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useUser } from "../../lib/useUser";

const Profile = () => {
  const { user, logout } = useUser();
  const isLoading = user === undefined;
  const { display_name, images } = user || {};
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
      <Avatar src={images && images[0]?.url} name={display_name} />
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton mx="2" isActive={isOpen}>
              {display_name}
            </MenuButton>
            <MenuList bg="#282828" border="none">
              <MenuItem {...menuItem} onClick={() => logout()}>
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
