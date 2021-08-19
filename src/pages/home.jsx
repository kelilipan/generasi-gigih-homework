import Main from "../layout/main";
import { login, storeUserData } from "../store/user";
import { getProfile } from "../lib/spotify";
import { useUser } from "../lib/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, Heading, Link, Text } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

const Home = () => {
  const { isAuthenticated, callback, redirect } = useUser();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    //check if user not authenticated then read access_token from hash url
    if (!isAuthenticated && window.location.hash) {
      const { access_token } = callback();
      if (access_token) {
        dispatch(login(access_token));
        //if access_token is valid, try to get userData using spotify api
        getProfile(access_token)
          .then((res) => {
            dispatch(storeUserData(res));
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to get user data!", {
              duration: 4000,
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          });
      }
    } else if (isAuthenticated) {
      history.push("/create-playlist");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  return (
    <>
      <Main justifyContent="center" alignItems="center">
        <Heading as="h1" fontSize={["4xl", "5xl"]}>
          Hello there,
        </Heading>
        <Text>Please login first before accessing the app.</Text>
        <Button
          mt="4"
          onClick={() => redirect()}
          leftIcon={<FaSpotify fontSize="20px" />}
        >
          Login With Spotify
        </Button>
      </Main>
      <Text
        color="whiteAlpha.700"
        textAlign="center"
        p={4}
        fontSize="sm"
        fontStyle="italic"
      >
        Made with ♥ by{" "}
        <Link href="https://www.wisesa.dev" isExternal>
          wisesa
        </Link>
        .
      </Text>
    </>
  );
};

export default Home;
