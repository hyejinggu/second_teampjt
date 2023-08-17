import styles from "../../css/subpage/community_lounge.module.css";
import { useState, useEffect } from "react";

export default function SideBar({ content, setCategory }) {
  const loungeSide = ["자유 게시판", "고민 상담소", "지식 공유", "친구 찾기"];
  const neighborSide = ["미용", "병원", "카페, 호텔", "훈련, 시터"];

  const sidebarItems = content === "lounge" ? loungeSide : neighborSide;

  // 클릭 시 배열 바꿔주기
  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className={styles.side_bar_wrap}>
      <ul className={styles.side_bar}>
        {sidebarItems.map((content, index) => (
          <li onClick={() => handleCategory(content)} key={index}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}
