import React from "react";
import { useLocation } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  /*     const location = useLocation(); // Add this line
    const cartItemInfo = location.state.itemInfo; // Change variable name
    const itemName = cartItemInfo.name; */

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <a href="../../subpage/html/subpage2.html">
          <img src={"/images/cart/exImg.jpg"} alt="이미지" />
        </a>
        <span className="text-ellipsis">{cartItem.name}</span>{" "}
        {/* Use itemName */}
      </td>
      <td>
        2개
        <input type="button" value="옵션/수량변경" />
      </td>
      <td className="price">
        <span className="sale_info">{cartItem.saleInfo}%</span>
        <del>{cartItem.normalPr}</del>
        <span className="sale_price">{cartItem.normalPr}</span>
      </td>
      <td className="total">82,600원</td>
    </tr>
  );
};

export default CartItem;
