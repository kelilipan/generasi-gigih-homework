import { logout } from "../store/user";
import { useAppDispatch, useAppSelector } from "./useRedux";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_BASE_URL;

const useUser = () => {
  const { isAuthenticated, data, accessToken } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const generateRandomString = (length: number): string => {
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
      "user-read-private playlist-modify-private user-read-email user-top-read streaming user-read-playback-state user-modify-playback-state";
    const state = generateRandomString(16);
    const paramsData = {
      response_type: "token",
      client_id: CLIENT_ID as string,
      redirect_uri: REDIRECT_URL as string,
      state,
      scope,
    };
    const params = new URLSearchParams(paramsData).toString();
    //redirect...
    window.location.replace(`${url}?${params}`);
  };

  /*
  Decode hash param from URL callback
  return the response or undefined
  */
  const callback = () => {
    const hash = window.location.hash;
    const params = hash.substr(1).split("&");
    const decodedParams = params.reduce((acc: any, currentValue) => {
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    if (hash) {
      return decodedParams;
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
