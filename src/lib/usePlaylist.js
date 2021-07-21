import { useState } from "react";

//TODO: use context API
const usePlaylist = () => {
  const [selectedTrack, setSelectedTrack] = useState([]);

  const addTrack = (id) => {
    setSelectedTrack([...selectedTrack, id]);
  };

  const removeTrack = (id) => {
    const temp = [...selectedTrack];
    const idx = temp.indexOf(id);
    if (idx !== -1) {
      temp.splice(idx, 1);
      setSelectedTrack(temp);
    }
  };

  const checkSelected = (id) => {
    return selectedTrack.includes(id);
  };

  const handleSelect = (id) => {
    const isSelected = checkSelected(id);
    if (!isSelected) {
      addTrack(id);
    } else {
      removeTrack(id);
    }
  };
  const createPlaylist = () => {
    console.log(selectedTrack);
  };
  return {
    selectedTrack,
    createPlaylist,
    addTrack,
    removeTrack,
    checkSelected,
    handleSelect,
  };
};
export { usePlaylist };
