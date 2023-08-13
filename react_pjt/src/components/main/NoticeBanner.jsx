import { useState } from "react";
import "../../css/main/main.css";
import Modal from "../common/Modal";

const NoticeBanner = () => {
  const [count, setCount] = useState(5200);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickNotification = () => {
    setIsModalOpen(true);
    setCount((count) => (count += 1));
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="notice_banner">
      <p>DanDog 공식 스토어</p>
      <span className="interested_ppl">관심고객수 {count}명</span>
      <span className="notification" onClick={clickNotification}>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            modalContent={"알림 설정이 완료되었습니다."}
          />
        )}
        알림받기
      </span>
    </div>
  );
};

export default NoticeBanner;
