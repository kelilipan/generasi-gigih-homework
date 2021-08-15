import config from "../site.config";
import { useState } from "react";
import { storeTracklist, clearList } from "../store/tracklist";
import { getSearchTrack, getTopTracks } from "./spotify";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useUser } from "./useUser";

const useTracklist = () => {
  const {
    lists: tracklist,
    currentPage,
    maxLength,
    isTopTrack,
    query: currentQuery,
  } = useAppSelector((state) => state.tracks);

  const dispatch = useAppDispatch();
  const { accessToken } = useUser();
  const [isLoading, setIsloading] = useState(false);
  const handleSearch = (query: string, page: number = 1) => {
    const offset = (page - 1) * config.SPOTIFY_SEARCH_LIMIT;
    const options = {
      q: query,
      type: "track",
      limit: config.SPOTIFY_SEARCH_LIMIT,
      offset,
    };

    setIsloading(true);
    getSearchTrack(accessToken || "", options).then((data) => {
      dispatch(
        storeTracklist({
          query,
          lists: [],
          maxLength: 1,
          currentPage: 1,
          isTopTrack: false,
        })
      ); // this will trigger stagger animation
      dispatch(
        storeTracklist({
          query,
          lists: data.tracks.items,
          currentPage: page,
          maxLength: Math.ceil(data.tracks.total / config.SPOTIFY_SEARCH_LIMIT),
          isTopTrack: false,
        })
      );
      setIsloading(false);
    });
  };

  const handleTopTracks = (page: number = 1) => {
    const offset = (page - 1) * config.SPOTIFY_SEARCH_LIMIT;
    getTopTracks(accessToken || "", offset).then((data) => {
      dispatch(
        storeTracklist({
          lists: [],
          maxLength: 1,
          currentPage: 1,
          isTopTrack: true,
        })
      ); // this will trigger stagger animation
      dispatch(
        storeTracklist({
          lists: data.items,
          currentPage: page,
          maxLength: Math.ceil(data.total / config.SPOTIFY_SEARCH_LIMIT),
          isTopTrack: true,
        })
      );
    });
  };
  return {
    tracklist,
    isLoading,
    handleSearch,
    handleTopTracks,
    isTopTrack,
    currentQuery,
    currentPage,
    maxLength,
  };
};
export { useTracklist };
