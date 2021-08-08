import { useState } from "react";
import {
  createPlaylist as createPlaylistAPI,
  addTraksToPlaylist,
  PlaylistOption,
} from "./spotify";
import { addTrack, removeTrack, clearPlaylist } from "../store/playlist";
import { useAppDispatch, useAppSelector } from "./useRedux";

const usePlaylist = () => {
  const [isLoading, setLoading] = useState(false);
  const selectedTrack = useAppSelector((state) => state.playlist.uris);
  const dispatch = useAppDispatch();

  const checkSelected = (id: string) => {
    return selectedTrack.includes(id);
  };

  const handleSelect = (id: string) => {
    const isSelected = checkSelected(id);
    if (!isSelected) {
      dispatch(addTrack(id));
    } else {
      dispatch(removeTrack(id));
    }
  };

  const createPlaylist = (token:string, userId:string, payload:PlaylistOption) => {
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
