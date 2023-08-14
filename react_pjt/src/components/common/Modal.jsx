import styles from "../../css/common/modal.module.css";

import PropTypes from "prop-types";
import React, { useState } from "react";

const Modal = ({ isModalOpen, modalContent, setIsModalOpen }) => {
  if (!isModalOpen) return null;
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{modalContent}</p>
        <span className={styles.close} onClick={closeModal}>
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
