import { useState } from "react";
import "../../css/main/main.css";

const NoticeBanner = () => {
  const [count, setCount] = useState(5200);
  const clickNotification = () => {
    setCount((count) => (count += 1));
  };

  return (
    <div className="notice_banner">
      <p>DanDog 공식 스토어</p>
      <span className="interested_ppl">관심고객수 {count}명</span>
      <span className="notification" onClick={clickNotification}>
        알림받기
      </span>
    </div>
  );
};

export default NoticeBanner;
