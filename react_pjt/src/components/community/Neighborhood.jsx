/* eslint-disable no-undef */ // 'kakao' is a global variable from Kakao Maps SDK

import styles from "../../css/subpage/community_neighbor.module.css";
import CommunityTitle from "./CommunityTitle";
import SideBar from "./SideBar";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import React, { useEffect } from "react";

export default function Neighborhood() {
  useEffect(() => {
    const container = document.getElementById(styles.map); // 맵 요소의 정확한 클래스 이름을 사용하세요
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    const map = new kakao.maps.Map(container, options);

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []); // 빈 의존성 배열은 초기 렌더링 후에 효과가 실행되도록 합니다.

  return (
    <div className={styles.neighborhood_container}>
      <div className={styles.title}>
        <strong>
          <NavLink to="/community/lounge">라운지</NavLink>
          <NavLink to="/community/event">이벤트</NavLink>
          <NavLink to="/community/neighborhood">우리 동네</NavLink>
        </strong>
      </div>
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
