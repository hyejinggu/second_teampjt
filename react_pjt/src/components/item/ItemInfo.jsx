// import "../../css/subpage/subpage_itemlist.css";

function ItemInfo() {
  const iteminfo = [
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
    },
    {
      name: "알록달록 로프 장난감",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item1.jpg", "/images/subpage/item1_1.jpg"],
      color: ["#1dcc03", "#ffeb0c"],
    },
    {
      name: "붕어빵 기계 장난감",
      saleInfo: 5,
      normalPr: 14000,
      image: ["/images/subpage/item2.jpg", "/images/subpage/item2_1.jpg"],
      color: ["#7d7d7d", "#865d10"],
    },
    {
      name: "도토리를 찾아라!",
      saleInfo: 10,
      normalPr: 13000,
      image: ["/images/subpage/item3.jpg", "/images/subpage/item3_1.jpg"],
      color: ["#865d10"],
    },
    {
      name: "애벌레야, 안녕",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item4.jpg", "/images/subpage/item4_1.jpg"],
      color: ["#fe60c2", "#1dcc03", "#ffeb0c"],
    },
    {
      name: "당근 밭에서 당근 난다",
      saleInfo: 20,
      normalPr: 18000,
      image: ["/images/subpage/item5.jpeg", "/images/subpage/item5_1.jpg"],
      color: ["#ff9b0e"],
    },
    {
      name: "돌려 돌려 미로",
      saleInfo: 30,
      normalPr: 21000,
      image: ["/images/subpage/item6.jpg", "/images/subpage/item6_1.jpg"],
      color: ["#ff9b0e", "#1dcc03", "#0ea7ff", "#ff0e0e"],
    },
    {
      name: "피자 한 입 먹을 견",
      saleInfo: 20,
      normalPr: 13000,
      image: ["/images/subpage/item7.jpg", "/images/subpage/item7-1.jpg"],
      color: ["#ff9b0e", "#ff0e0e"],
    },
    {
      name: "그냥 왕 물어버려(치석 제거)",
      saleInfo: 10,
      normalPr: 11000,
      image: ["/images/subpage/item8.jpg", "/images/subpage/item8_1.jpg"],
      color: ["#ffeb0c", "#1dcc03", "#0ea7ff", "#fe60c2"],
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

  return (
    <ul>
      {iteminfo.map((item, index) => (
        <li key={index}>
          <div className="item_container">
            <div className="normal_item">
              <img src={item.image[0]} alt="" />
              <img src={item.image[1]} alt="" />
            </div>
            <div className="item_info_wrap">
              <h3>{item.name}</h3>
              <span>{item.saleInfo}%</span>
              <span>{normalPr(item)}원</span>
              <span>{presentPr(item)}원</span>
            </div>
            <div className="color">
              {item.color.map((color, colorIdx) => (
                <span title={color} style={{ backgroundColor: color }}></span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemInfo;
