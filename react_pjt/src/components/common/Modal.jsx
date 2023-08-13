import "../../css/main/main.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

const Modal = ({ isModalOpen, modalContent, closeModal }) => {
  if (!isModalOpen) return null;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{modalContent}</p>
        <span className="close" onClick={closeModal}>
          확인
        </span>
      </div>
    </div>
  );
}; // Modal

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalContent: PropTypes.node.isRequired,
};

export default Modal;
