import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { usePlaylist } from "../../lib/usePlaylist";
import Button from "../button";
import ModalPlaylist from "../modal-create-playlist";
import MusicCard from "../music-card";
import toast from "react-hot-toast";
import { useUser } from "../../lib/useUser";
import { useTracklist } from "../../lib/useTracklist";
import { useDispatch } from "react-redux";
import { clearList, storeTracklist } from "../../store/tracklist";
import { getTopTracks } from "../../lib/spotify";
const Playlist = () => {
  const {
    selectedTrack,
    checkSelected,
    handleSelect,
    createPlaylist,
    isLoading,
  } = usePlaylist();

  const {
    isAuthenticated,
    accessToken,
    user: { id: user_id },
  } = useUser();

  const dispatch = useDispatch();
  const { tracklist } = useTracklist();
  const isEmpty = selectedTrack.length === 0;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreatePlaylist = (payload) => {
    isAuthenticated &&
      createPlaylist(accessToken, user_id, payload).then(() => {
        setModalOpen(false);
        toast.success("Successfully created!", {
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getTopTracks(accessToken).then((data) => {
        dispatch(storeTracklist(data.items));
      });
    }
    return () => {
      dispatch(clearList());
    };
  }, [dispatch, isAuthenticated, accessToken]);

  return (
    <div className="playlistContainer">
      {tracklist.map((music) => (
        <MusicCard
          key={music.id}
          data={music}
          handleSelect={handleSelect}
          isSelected={checkSelected(music.uri)}
        />
      ))}

      <ModalPlaylist
        isLoading={isLoading}
        createPlaylist={handleCreatePlaylist}
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      {isAuthenticated && !isEmpty && (
        <div style={{ position: "fixed", bottom: 18, right: 18 }}>
          <Button
            leftIcon={<FaPlusCircle />}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Create playlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default Playlist;
