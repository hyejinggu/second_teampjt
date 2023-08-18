/* eslint-disable no-undef */ // 'kakao' is a global variable from Kakao Maps SDK

// import kakao from "kakao"; // Kakao Maps SDK 모듈을 임포트
import styles from "../../css/subpage/community_neighbor.module.css";
import SideBar from "./SideBar";
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import NeiborReview from "./NeighborReview";

const neiborReview = {
  beautyReview: [
    {
      title: "멍멍 미용",
      content: "🐶너무 예쁘게 미용해주셨어요.",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "월월 미용",
      content: "둥실둥실 브로콜리가 되었어요🥦",
      grade: 4.8,
      userid: "hello",
    },
    {
      title: "예뻐지개",
      content: "메롱메롱메롱메롱",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "예뻐지개",
      content: "메롱메롱메롱메롱",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "예뻐지개",
      content: "메롱메롱메롱메롱😍",
      grade: 4.5,
      userid: "hello",
    },
  ],
  hosReview: [
    {
      title: "멍멍 병원",
      content: "우리 토실이가 아파서 가까운 병원 갔는데 너무 친절하셨어요.",
      grade: 4.6,
      userid: "hihi",
    },
    {
      title: "월월 hospital",
      content: "👍둥실둥실 브로콜리가 되었어요",
      grade: 4.8,
      userid: "나옹이",
    },
    {
      title: "아프지마시개",
      content: "할 말이 없다냥",
      grade: 4.5,
      userid: "멍멍이",
    },
    {
      title: "멍냥멍냥",
      content: "메롱메롱메롱메롱",
      grade: 4.5,
      userid: "도마뱀",
    },
    {
      title: "아프지마시개",
      content: "메롱메롱메롱메롱",
      grade: 4.5,
      userid: "토끼",
    },
  ],
  cafeReview: [
    {
      title: "호로록",
      content: "카라멜마끼야또 맛있다☕",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "강아지도 커피 마심",
      content: "집에 가고 싶어...",
      grade: 4.8,
      userid: "hello",
    },
    {
      title: "안돼!!",
      content: "🎈동해물과 백두산이 마르고 닳도록",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "내맘이야",
      content: "오늘은 2023년 8월 17일!!",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "호로록",
      content: "그만해!!!!!!!",
      grade: 4.5,
      userid: "hello",
    },
  ],
  trainingReview: [
    {
      title: "내 이름은 개",
      content: "강아지 배변훈련 여기가 최고입니다.🧡",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "강강약약",
      content: "🐺우리 강아지가 강강약약이 되었어요.",
      grade: 4.8,
      userid: "hello",
    },
    {
      title: "강약약강",
      content: "🐶우리 강아지가 강약약강이 되었어요.",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "여행가고싶지",
      content: "급한 일이 생겼는데 반려동물 맡기고 싶을 때! 이곳을 선택하세요.",
      grade: 4.5,
      userid: "hello",
    },
    {
      title: "놀러가자",
      content: "ㅎㅎㅎㅎㅎㅎ",
      grade: 4.5,
      userid: "hello",
    },
  ],
};

export default function Neighborhood() {
  useEffect(() => {
    var container = document.getElementById(styles.map); // 맵 요소의 정확한 클래스 이름을 사용하세요
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };

    var map = new kakao.maps.Map(container, options);

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // =============================================
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">현재 나의 위치</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow1 = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow1.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, []); // 빈 의존성 배열은 초기 렌더링 후에 효과가 실행되도록 합니다.

  const [category, setCategory] = useState("미용");
  const [neighborArray, setNeiborArray] = useState(neiborReview.beautyReview);

  useMemo(() => {
    switch (category) {
      case "미용":
        setNeiborArray(neiborReview.beautyReview);
        break;
      case "병원":
        setNeiborArray(neiborReview.hosReview);
        break;
      case "카페, 호텔":
        setNeiborArray(neiborReview.cafeReview);
        break;
      case "훈련, 시터":
        setNeiborArray(neiborReview.trainingReview);
        break;
      default:
        setNeiborArray(neiborReview.beautyReview);
    }
  }, [category]);

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
        <SideBar content="neighbor" setCategory={setCategory} />

        <div className={styles.right_side}>
          <div className={styles.map_wrap}>
            <div id={styles.map}></div>
          </div>

          <NeiborReview neighborArray={neighborArray} />
        </div>
      </div>
    </div>
  );
}
