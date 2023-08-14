import React from "react";

const CartItemPrice = ({ presentPr, normalPr, totalPrice, count }) => {

    return (
        <div>
            <p className='total_product'>총 주문 상품 <span>{count}</span>개</p>
            <div className="total_price">
                <p>30,000원 이상 구매시 배송비 무료</p>
                <div className="firstB_price">
                    <span className="product_price">{totalPrice()}</span>
                    <span className="delivery_price">0원</span>
                    <span className="total_price2">{totalPrice()}원</span>
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