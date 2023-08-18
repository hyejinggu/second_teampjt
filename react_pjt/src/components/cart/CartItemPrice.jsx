import React from "react";
import { useState } from "react";

const CartItemPrice = ({ presentPr, normalPr, totalPrice, quantity, formatter, selectedItem }) => {

    const delivery_price = () => {
        const originalPr = selectedItem.normalPr;
        const salePr = originalPr - originalPr * (selectedItem.saleInfo / 100);
        const totalpr = salePr * quantity
        return totalpr >= 50000 ? 0 : 3000;
    }

    const totalWithDelivery = () => {
        const originalPr = selectedItem.normalPr;
        const salePr = originalPr - originalPr * (selectedItem.saleInfo / 100);
        const totalpr = salePr * quantity
        const totalWithDelivery = totalpr >= 50000 ? totalpr : totalpr + 3000;
        return formatter.format(totalWithDelivery);
    }

    // totalPrice = totalPrice.toLocaleString();
    return (
        <div>
            <p className='total_product'>총 주문 상품 <span>{quantity}</span>개</p>
            <div className="total_price">
                <p>30,000원 이상 구매시 배송비 무료</p>
                <div className="firstB_price">
                    <span className="product_price">{totalPrice().toLocaleString()}원</span>
                    <span className="delivery_price">{delivery_price().toLocaleString()}원</span>
                    <span className="total_price2">{totalWithDelivery().toLocaleString()}원</span>
                </div>
                <div className="price_info">
                    <ul>
                        <li className="product_price">주문금액</li>
                        <li className="delivery_price">배송비</li>
                        <li className="total_price2">결제금액</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartItemPrice;