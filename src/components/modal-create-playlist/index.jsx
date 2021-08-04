import style from "./style.module.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaSave, FaTimes } from "react-icons/fa";
const ModalPlaylist = ({ isOpen, onClose, createPlaylist, isLoading }) => {
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylist(payload);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target && e.target.id === "modal") {
        return onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("click", handleClick);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);
  
  return (
    isOpen &&
    createPortal(
      <div id="modal" className={style.modal}>
        <div id="overlay" className={style.overlay} />
        <div className={style.modalContent}>
          <div className={style.header}>
            <h3 className={style.title}>Create playlist</h3>
            <button className={style.closeButton} onClick={() => onClose()}>
              <FaTimes />
            </button>
          </div>
          <div className={style.body}>
            <form id="createPlaylistForm" onSubmit={handleSubmit}>
              <div className={style.formControl}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Input playlist name"
                  minLength="10"
                  onChange={handleChange}
                />
              </div>
              <div className={style.formControl}>
                <label htmlFor="description">Description</label>
                <textarea
                  rows={5}
                  id="description"
                  name="description"
                  placeholder="Input playlist description"
                  minLength="20"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className={style.footer}>
            <Button
              isLoading={isLoading}
              loadingText="Saving"
              form="createPlaylistForm"
              leftIcon={<FaSave />}
              style={{ marginLeft: "auto" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default ModalPlaylist;
