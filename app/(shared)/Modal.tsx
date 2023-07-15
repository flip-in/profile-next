import { useState } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  imgSrc: string;
};

const Modal = ({ isOpen, closeModal, imgSrc }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={closeModal}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          borderRadius: "8px",
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking within the modal
      />
    </div>,
    document.body // portal element
  );
};

export default Modal;
