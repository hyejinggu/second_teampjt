import ItemInfo from "./ItemInfo";
import styles from "../../css/subpage/Itemlist.module.css";
// import PageNation from "./PageNation";
import { useReducer, useState } from "react";

const ItemList = () => {
  // ======== 상품 목록 배열 ========
  let iteminfo = [
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(2번)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(3번)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
      clicked: 1032,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
      clicked: 1870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
    {
      name: "그냥 왕 물어버려(마지막)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
      sizes: ["S", "M", "L"],
      colors: ["노랑", "연두"],
    },
  ];

  // ======== 상품 정렬을 위한 reducer 함수 시작 ========
  const arrayReducer = (state, action) => {
    switch (action.type) {
      case "popular":
        return [...state].sort((a, b) => b.clicked - a.clicked);
      case "low":
        return [...state].sort((a, b) => a.normalPr - b.normalPr);
      case "high":
        return [...state].sort((a, b) => b.normalPr - a.normalPr);
      case "new":
        return iteminfo;
    }
  };

  const [array, dispatch] = useReducer(arrayReducer, iteminfo);

  // 페이지 이동(onClick)에 따라 보여지는 배열 바꿔주기
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const startIndex = (page - 1) * itemsPerPage;
  const displayedItemInfo = array.slice(startIndex, startIndex + itemsPerPage);
  // ======== 가격 계산 및 형식 변환 함수 시작 ========
  const formatter = new Intl.NumberFormat("ko-KR", {
    //   style: "currency",
    //   currency: "USD", // 통화 코드를 원하는 통화로 변경
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const presentPr = (item) => {
    const originalPr = item.normalPr;
    const salePr = originalPr - originalPr * (item.saleInfo / 100);
    return formatter.format(salePr);
  };
  const normalPr = (item) => formatter.format(item.normalPr);

  // return 시작
  return (
    <div className={styles.container}>
      <div className={styles.cate_wrap}>
        <h2 className={styles.title}>장난감</h2>
      </div>

      <div className={styles.sort}>
        <ul>
          <li onClick={() => dispatch({ type: "popular" })}>인기순</li>
          <li onClick={() => dispatch({ type: "high" })}>높은가격순</li>
          <li onClick={() => dispatch({ type: "low" })}>낮은가격순</li>
          <li onClick={() => dispatch({ type: "new" })}>신상품순</li>
        </ul>
        <p>총 25개의 상품</p>
      </div>

      <div className={styles.item_wrap}>
        <ItemInfo
          selectedIteminfo={displayedItemInfo}
          presentPr={presentPr}
          normalPr={normalPr}
        />
      </div>
      {/* <PageNation setPage={setPage} /> */}
      <div className={styles.page_shift}>
        {[1, 2, 3].map((pageNumber) => (
          <span key={pageNumber} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
