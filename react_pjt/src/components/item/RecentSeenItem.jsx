import styles from "../../css/common/recent_item.module.css";

const RecentSeenItem = () => {
  const seenItem = JSON.parse(localStorage.getItem("recentItem"));
  const limitedSeenItems = seenItem.slice(0, 3); // 세 개의 아이템만 보이도록 제한

  return (
    <div className={styles.recent_item_container}>
      <ul>
        {limitedSeenItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <div>
              {" "}
              <img src={item.image[1]} alt="상품이미지" />
            </div>
            <span>
              {(
                item.normalPr -
                (item.normalPr * item.saleInfo) / 100
              ).toLocaleString("ko")}
              원
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSeenItem;
