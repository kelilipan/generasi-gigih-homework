import { useState } from "react";
import { storeTracklist } from "../store/tracklist";
import { getSearchTrack } from "./spotify";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useUser } from "./useUser";

const useTracklist = () => {
  const tracklist = useAppSelector((state) => state.tracks.lists);
  const dispatch = useAppDispatch();
  const { isAuthenticated, accessToken } = useUser();
  const [isLoading, setIsloading] = useState(false);
  const handleSearch = (query: string) => {
    const options = {
      q: query,
      type: "track",
      limit: 20,
    };
    setIsloading(true);
    getSearchTrack(accessToken || "", options).then((data) => {
      dispatch(storeTracklist([])); // this will trigger stagger animation
      dispatch(storeTracklist(data.tracks.items));
      setIsloading(false);
    });
  };
  return { tracklist, isLoading, handleSearch };
};
export { useTracklist };
