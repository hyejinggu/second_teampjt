import React from "react";
import { useLocation } from "react-router-dom";

const CartItem = () => {

    const location = useLocation();
    const selectedItem = location.state.selectedItem;
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <a href="../../subpage/html/subpage2.html">
                    <img src={"/images/cart/exImg.jpg"} alt="이미지" />
                </a>
                <span className="text-ellipsis">{selectedItem.name}</span>
            </td>
            <td>
                2개
                <input type="button" value="옵션/수량변경" />
            </td>
            <td className="price">
                <span className="sale_info">{selectedItem.saleInfo}%</span>
                <del>{selectedItem.normalPr}</del>
                <span className="sale_price">{selectedItem.normalPr}</span>
            </td>
            <td className="total">82,600원</td>
        </tr>
    );
};

export default CartItem;
