import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { usePlaylist } from "../../lib/usePlaylist";
import Button from "../button";
import ModalPlaylist from "../modal-create-playlist";
import MusicCard from "../music-card";
import toast from "react-hot-toast";
import { useUser } from "../../lib/useUser";
const Playlist = ({ data }) => {
  const {
    selectedTrack,
    checkSelected,
    handleSelect,
    createPlaylist,
    isLoading,
  } = usePlaylist();
  const isEmpty = selectedTrack.length === 0;
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    isAuthenticated,
    accessToken,
    user: { id: user_id },
  } = useUser();

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

  return (
    <div className="playlistContainer">
      {data.map((music) => (
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
