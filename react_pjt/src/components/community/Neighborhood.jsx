import styles from "../../css/subpage/community_neighbor.module.css";
import CommunityTitle from "./CommunityTitle";
import SideBar from "./SideBar";

export default function Neighborhood() {
  // let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  // let options = {
  //   //지도를 생성할 때 필요한 기본 옵션
  //   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //   level: 3, //지도의 레벨(확대, 축소 정도)
  // };

  // let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  return (
    <div className={styles.neighborhood_container}>
      <div className={styles.content_wrap}>
        <SideBar content="neighbor" />

        <div className={styles.right_side}>
          <div className={styles.map_wrap}>
            <div id={styles.map}></div>
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
