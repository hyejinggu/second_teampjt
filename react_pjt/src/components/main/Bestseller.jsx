import React, { useState, useReducer } from "react";
import styles from "../../css/main/main.module.css";
import BestsellerList from "./BestsellerList";

const Bestseller = () => {
  const [iteminfo, setiteminfo] = useState([
    // 초기 상품 정보 배열
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
    },
  ]);

  const snackiteminfo = [];

  const toyiteminfo = [
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
    },
  ];

  const livingiteminfo = [
    // ... 다른 상품들
  ];

  const careiteminfo = [
    // ... 다른 산책 상품들
  ];

  const [selectedItems, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_SELECTED_ITEMS":
        return action.payload;
      default:
        return state;
    }
  }, iteminfo);

  const formatter = new Intl.NumberFormat("ko-KR", {
    //   style: "currency",
    //   currency: "USD", // 통화 코드를 원하는 통화로 변경
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  // 세일 퍼센티지와 기존 가격으로 할인 가격을 계산하고 가격 형식으로 바꾸어줌.
  const presentPr = (item) => {
    const originalPr = item.normalPr;
    const salePr = originalPr - originalPr * (item.saleInfo / 100);
    return formatter.format(salePr);
  };
  const normalPr = (item) => formatter.format(item.normalPr);

  // 각 링크를 클릭할 때 실행되는 함수
  const handleLinkClick = (event, newiteminfo) => {
    event.preventDefault();
    dispatch({ type: "SET_SELECTED_ITEMS", payload: newiteminfo });
  };

  return (
    <div className={styles.bestseller_wrap}>
      <h1>베스트 셀러 상품</h1>
      <div className={styles.bestseller_list}>
        <a href="#" onClick={(event) => handleLinkClick(event, snackiteminfo)}>
          <h2>간식, 사료</h2>
        </a>
        <a href="#" onClick={(event) => handleLinkClick(event, toyiteminfo)}>
          <h2>장난감</h2>
        </a>
        <a href="#" onClick={(event) => handleLinkClick(event, livingiteminfo)}>
          <h2>리빙, 패션</h2>
        </a>
        <a href="#" onClick={(event) => handleLinkClick(event, careiteminfo)}>
          <h2>산책, 케어</h2>
        </a>
      </div>
      <BestsellerList
        array={selectedItems}
        presentPr={presentPr}
        normalPr={normalPr}
      />
    </div>
  );
};

export default Bestseller;
