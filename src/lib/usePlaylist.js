import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlaylist as createPlaylistAPI,
  addTraksToPlaylist,
} from "./spotify";
import { addTrack, removeTrack, clearPlaylist } from "../store/playlist";

const usePlaylist = () => {
  const [isLoading, setLoading] = useState(false);
  const selectedTrack = useSelector((state) => state.playlist.uris);
  const dispatch = useDispatch();

  const checkSelected = (id) => {
    return selectedTrack.includes(id);
  };

  const handleSelect = (id) => {
    const isSelected = checkSelected(id);
    if (!isSelected) {
      dispatch(addTrack(id));
    } else {
      dispatch(removeTrack(id));
    }
  };

  const createPlaylist = (token, userId, payload) => {
    setLoading(true);
    //create playlist
    return createPlaylistAPI(token, userId, payload).then((res) => {
      const { id: playlist_id } = res;
      //after playlist created, insert tracklist
      return addTraksToPlaylist(token, playlist_id, {
        uris: selectedTrack,
      }).then(() => {
        //after successfull, empty the tracklist
        dispatch(clearPlaylist());
        setLoading(false);
      });
    });
  };

  return {
    selectedTrack,
    createPlaylist,
    checkSelected,
    handleSelect,
    isLoading,
  };
};
export { usePlaylist };
