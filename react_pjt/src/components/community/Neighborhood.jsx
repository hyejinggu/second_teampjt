import styles from "../../css/subpage/community_neighbor.module.css";
import CommunityTitle from "./CommunityTitle";

export default function Neighborhood() {
  return (
    <div className={styles.neighborhood_container}>
      <CommunityTitle />

      <ul className={styles.side_bar}>
        <li>미용</li>
        <li>병원</li>
        <li>훈련, 시터</li>
        <li>카페, 호텔</li>
      </ul>

      <div className={styles.map_wrap}>
        <div></div>
      </div>

      <div className={styles.review_wrap}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
