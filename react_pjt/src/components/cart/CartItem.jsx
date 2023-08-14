import React from 'react';
import { useLocation } from 'react-router-dom';

const CartItem = ({ itemInfo }) => {
    const location = useLocation(); // Add this line
    const selectedItemInfo = location.state.itemInfo; // Change variable name
    const itemName = selectedItemInfo.name;

    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <a href="../../subpage/html/subpage2.html">
                    <img src={"/images/cart/exImg.jpg"} alt="이미지" />
                </a>
                <span className="text-ellipsis">{selectedItemInfo.name}</span> {/* Use itemName */}
            </td>
            <td>2개
                <input type="button" value="옵션/수량변경" />
            </td>
            <td className="price">
                <span className="sale_info">30%</span>
                <del>{selectedItemInfo.originalPrice}</del>
                <span className="sale_price">{selectedItemInfo.discountedPrice}</span>
            </td>
            <td className="total">82,600원</td>
        </tr>
    );
}

export default CartItem;