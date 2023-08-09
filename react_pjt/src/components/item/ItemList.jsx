import ItemInfo from "./ItemInfo";
import "../../css/subpage/subpage_itemlist.css";

const ItemList = () => {
  return (
    <div className="container">
      <div className="cate_wrap">
        <h2 className="title">장난감</h2>
      </div>

      <div className="item sort">
        <ul>
          <li>인기순</li>
          <li>높은가격순</li>
          <li>낮은가격순</li>
          <li>신상품순</li>
        </ul>
        <p>총 25개의 상품</p>
      </div>

      <div className="content_wrap">
        <ItemInfo />
      </div>
      <div className="page_shift">
        <span id="now">1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
};

export default ItemList;
