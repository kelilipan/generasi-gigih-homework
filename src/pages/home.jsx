import Main from "../layout/main";
import { login, storeUserData } from "../store/user";
import { getProfile } from "../lib/spotify";
import { useUser } from "../lib/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/home-header";
import Feature from "../components/home-feature";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const { isAuthenticated, callback } = useUser();
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
    <Main>
      <Header />
      <Feature />
    </Main>
  );
};

export default Home;
