import React, { useEffect } from "react";
import { StyledModal, StyledOverlay } from "./Modal.styled";

const Modal = ({ openModal, children }) => {
  useEffect(() => {
    const clickEsc = (e) => {
      if (e.code !== "Escape") return;
      openModal();
    };

    window.addEventListener("keydown", clickEsc);

    return () => {
      window.removeEventListener("keydown", clickEsc);
    };
  }, [openModal]);

  const clickOverlay = (e) => {
    if (e.target.tagName !== "DIV") return;
    openModal();
  };

  return (
    <StyledOverlay onClick={clickOverlay}>
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
