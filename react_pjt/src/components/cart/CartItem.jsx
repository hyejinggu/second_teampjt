import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const CartItem = ({ onIncrease, onDecrease, totalPrice, count }) => {
    const location = useLocation();
    const selectedItem = location.state.selectedItem;

    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <a href="../../subpage/html/subpage2.html">
                    <img src={selectedItem.image[1]} alt="이미지" />
                </a>
                <span className="text-ellipsis">{selectedItem.name}</span>
            </td>
            <td>
                <button onClick={onIncrease}>+</button>
                <span className="total">{count}</span>
                <button onClick={onDecrease}>-</button>
            </td>
            <td className="price">
                <span className="sale_info">{selectedItem.saleInfo}%</span>
                <del>{selectedItem.normalPr.toLocaleString()}원</del>
                <span className="sale_price">{selectedItem.normalPr.toLocaleString()}원</span>
            </td>
            <td className="total">{totalPrice()}원</td>
        </tr>
    );
};

export default CartItem;