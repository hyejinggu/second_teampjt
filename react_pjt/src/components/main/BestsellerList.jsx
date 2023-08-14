import React from "react";
import styles from "../../css/main/main.module.css";
import { Link } from "react-router-dom";

const BestsellerList = ({ array, presentPr, normalPr }) => {
  return (
    <ul className={styles.bestseller}>
      {array.map((item, index) => (
        <li key={index}>
          <Link to="/itemdetail">
            <div className={styles.item_info_wrap}>
              <a href="#">
                <img src={item.image[0]} alt={`상품 ${index + 1}`} />
                <h3>{item.name}</h3>
                <span className={styles.sale_info}>{item.saleInfo}</span>
                <span className={styles.normal_pr}>{normalPr(item)}원</span>
                <span className={styles.present_pr}>{presentPr(item)}원</span>
              </a>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BestsellerList;
