import style from "./style.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
const ModalPlaylist = ({ isOpen, onClose }) => {
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
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen, onClose]);
  return (
    isOpen &&
    createPortal(
      <div id="modal" className={style.modal}>
        <div id="overlay" className={style.overlay} />
        <div className={style.modalContent}>
          <div className={style.header}>test</div>
          <div className={style.body}>test</div>
          <div className={style.footer}>test</div>
        </div>
      </div>,
      document.body
    )
  );
};

export default ModalPlaylist;
