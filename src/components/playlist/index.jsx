import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { usePlaylist } from "../../lib/usePlaylist";
import Button from "../button";
import ModalPlaylist from "../modal-create-playlist";
import MusicCard from "../music-card";
const Playlist = ({ data }) => {
  const { checkSelected, handleSelect, createPlaylist } = usePlaylist();
  const [isModalOpen, setModalOpen] = useState(false);
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
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
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
    </div>
  );
};

export default Playlist;
