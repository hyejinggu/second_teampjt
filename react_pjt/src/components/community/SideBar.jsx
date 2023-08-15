import styles from "../../css/subpage/community_lounge.module.css";
import { useState, useEffect } from "react";

const loungeSideBar = ["자유 게시판", "고민 상담소", "지식 공유", "칮구 찾기"];
const neighborSideBar = ["미용", "병원", "카페, 호텔", "훈련, 시터"];

export default function SideBar({ content }) {
  if (content === "lounge") {
    return (
      <div className={styles.side_bar_wrap}>
        <ul className={styles.side_bar}>
          {loungeSideBar.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
    );
  } else if (content === "neighbor") {
    return (
      <div className={styles.side_bar_wrap}>
        <ul className={styles.side_bar}>
          {neighborSideBar.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
    );
  }
}
