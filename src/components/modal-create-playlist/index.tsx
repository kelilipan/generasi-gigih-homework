import style from "./style.module.css";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
interface ModalPlaylistProps {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => {};
  createPlaylist: (payload: any) => {};
}
const ModalPlaylist = ({
  isOpen,
  onClose,
  createPlaylist,
  isLoading,
}: ModalPlaylistProps) => {
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createPlaylist(payload);
  };
  const bg = {
    "@supports (backdrop-filter: blur(8px))": {
      backdropFilter: "blur(8px)",
      bgColor: "rgba(0,0,0,0.5)",
    },
    "@supports (-webkit-backdrop-filter: blur(8px))": {
      WebkitBackdropFilter: "blur(8px)",
      bgColor: "rgba(0,0,0,0.5)",
    },
    "@supports not (backdrop-filter: blur(8px))": {
      bgColor: "rgba(0,0,0,0.5)",
    },
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay sx={bg} />
      <ModalContent bgColor="#282828">
        <ModalHeader>Create playlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="createPlaylistForm" onSubmit={handleSubmit}>
            <div className={style.formControl}>
              <label htmlFor="name">Name</label>
              <input
                required
                id="name"
                name="name"
                placeholder="Input playlist name"
                minLength={10}
                onChange={handleChange}
              />
            </div>
            <div className={style.formControl}>
              <label htmlFor="description">Description</label>
              <textarea
                required
                rows={5}
                id="description"
                name="description"
                placeholder="Input playlist description"
                minLength={20}
                onChange={handleChange}
              />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            type="submit"
            form="createPlaylistForm"
            isLoading={isLoading}
            loadingText="Saving"
            leftIcon={<FaSave />}
            style={{ marginLeft: "auto" }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalPlaylist;
