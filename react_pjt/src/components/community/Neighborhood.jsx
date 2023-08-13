import styles from "../../css/subpage/community_neighbor.module.css";

export default function Neighborhood() {
  return (
    <div className={styles.neighborhood_container}>
      <div className={styles.title}>
        <strong>
          <a href="">라운지</a>
          <a href="#">이벤트</a>
          <a href="">우리 동네</a>
        </strong>
      </div>

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
