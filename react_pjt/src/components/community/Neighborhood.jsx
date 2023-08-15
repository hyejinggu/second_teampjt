import styles from "../../css/subpage/community_neighbor.module.css";
import CommunityTitle from "./CommunityTitle";
import SideBar from "./SideBar";

export default function Neighborhood() {
  return (
    <div className={styles.neighborhood_container}>
      <CommunityTitle />
      <div className={styles.content_wrap}>
        <SideBar content="neighbor" />

        <div className={styles.right_side}>
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
      </div>
    </div>
  );
}
