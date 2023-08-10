import ItemInfo from "./ItemInfo";
import "../../css/subpage/subpage_itemlist.css";
import PageNation from "./PageNation";
import { useReducer } from "react";

const ItemList = () => {
  const arrayReducer = (state, action) => {
    switch (action.type) {
      case "popular":
        return [...state].sort((a, b) => a.clicked - b.clicked);
      case "low":
        return [...state].sort((a, b) => b.normalPr - a.normalPr);
      case "high":
        return [...state].sort((a, b) => a.normalPr - b.normalPr);
      case "new":
        return state;
      default:
        return state;
    }
  };

  const iteminfo = [
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
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
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
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
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
      clicked: 1300,
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
      clicked: 2200,
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
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
      clicked: 982,
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
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
      clicked: 870,
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
      clicked: 1432,
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
      clicked: 999,
    },
  ];

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
  // 세일 퍼센티지와 기존 가격으로 할인 가격을 계산하고 가격 형식으로 바꾸어줌.

  // 클릭 시 아이템 정렬을 위한 useReducer 선언
  const [array, dispatch] = useReducer(arrayReducer, iteminfo);

  return (
    <div className="container">
      <div className="cate_wrap">
        <h2 className="title">장난감</h2>
      </div>

      <div className="item sort">
        <ul>
          <li onClick={() => dispatch({ type: "popular" })}>인기순</li>
          <li onClick={() => dispatch({ type: "low" })}>높은가격순</li>
          <li onClick={() => dispatch({ type: "high" })}>낮은가격순</li>
          <li onClick={() => dispatch({ type: "new" })}>신상품순</li>
        </ul>
        <p>총 25개의 상품</p>
      </div>

      <div className="content_wrap">
        <ItemInfo iteminfo={array} presentPr={presentPr} normalPr={normalPr} />
      </div>
      <PageNation />
    </div>
  );
};

export default ItemList;
