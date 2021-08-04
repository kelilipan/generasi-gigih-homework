import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_BASE_URL;

const useUser = () => {
  const { isAuthenticated, data, accessToken } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const generateRandomString = (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  //function to redirect to spotify login API
  const redirect = () => {
    const url = "https://accounts.spotify.com/authorize";
    const scope =
      "user-read-private playlist-modify-private user-read-email user-top-read";
    const state = generateRandomString(16);
    const paramsData = {
      response_type: "token",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
      state,
      scope,
    };
    const params = new URLSearchParams(paramsData).toString();
    //redirect...
    window.location = `${url}?${params}`;
  };

  /*
  Decode hash param from URL callback
  return the response or undefined
  */
  const callback = () => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (hashParams.access_token) {
      return hashParams;
    }
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return {
    redirect,
    callback,
    isAuthenticated,
    accessToken,
    user: data,
    logout: handleLogout,
  };
};
export { useUser };
