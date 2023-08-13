import { Routes, Route, Link } from "react-router-dom";
import styles from "../../css/subpage/Itemlist.module.css";

function ItemInfo({ selectedIteminfo, presentPr, normalPr }) {
  return (
    <div>
      <ul>
        {selectedIteminfo.map((item, index) => (
          <li key={index}>
            <Link to="/itemdetail">
              <div className={styles.item_container}>
                <div className={styles.normal_item}>
                  <img src={item.image[0]} alt="" />
                  <img src={item.image[1]} alt="" />
                </div>
                <div className={styles.item_info_wrap}>
                  <h3>{item.name}</h3>
                  <span>{item.saleInfo}%</span>
                  <span>{normalPr(item)}원</span>
                  <span>{presentPr(item)}원</span>
                </div>
                <div className={styles.color}>
                  {item.color.map((color, colorIdx) => (
                    <span
                      title={color}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* <Routes>
        <Route path="/itemdetail" element={<ItemDetail />} />
      </Routes> */}
    </div>
  );
}

export default ItemInfo;
