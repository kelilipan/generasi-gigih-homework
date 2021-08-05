import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTracklist } from "../store/tracklist";
import { getSearchTrack } from "./spotify";
import { useUser } from "./useUser";

const useTracklist = () => {
  const tracklist = useSelector((state) => state.tracks.lists);
  const dispatch = useDispatch();
  const { accessToken } = useUser();
  const [isLoading, setIsloading] = useState(false);
  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 20,
    };
    setIsloading(true);
    getSearchTrack(accessToken, options).then((data) => {
      dispatch(storeTracklist([])); // this will trigger stagger animation
      dispatch(storeTracklist(data.tracks.items));
      setIsloading(false);
    });
  };
  return { tracklist, isLoading, handleSearch };
};
export { useTracklist };
