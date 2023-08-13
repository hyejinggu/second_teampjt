import styles from "../../css/subpage/community_event.module.css";

export default function Event() {
  return (
    <div id="wrap" className={styles.event_container}>
      <div className={styles.title}>
        <strong>
          <a href="">라운지</a>
          <a href="#">이벤트</a>
          <a href="">우리 동네</a>
        </strong>
      </div>
      <ul className={styles.event_type}>
        <li>전체 이벤트</li>
        <li>구매자 이벤트</li>
        <li>체험단</li>
      </ul>
      <div className={styles.event_content}>
        <ul>
          <li>
            <p>종료된 이벤트입니다.</p>
            <div className={styles.opacity_box}></div>
            <img
              src="https://pethroom.com/file_data/pepem1//2023/08/01/fba10a676bd1d9b72d9dadc41e923f56.jpg"
              alt="event_img1"
            />
          </li>
        </ul>
      </div>
      <div className={styles.page_shift}></div>
    </div>
  );
}
