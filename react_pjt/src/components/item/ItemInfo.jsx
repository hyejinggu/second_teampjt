// import "../../css/subpage/subpage_itemlist.css";
import { Routes, Route, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemInfo({ iteminfo, presentPr, normalPr }) {
  return (
    <div>
      <ul>
        {iteminfo.map((item, index) => (
          <li key={index}>
            <Link to="/itemdetail">
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

      <Routes>
        <Route path="/itemdetail" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default ItemInfo;
