import { useLocation } from "react-router-dom";

const CartItemPrice = () => {
    const location = useLocation();
    const selectedItem = location.state.selectedItem;
    return (
        <>
            <p className='total_product'>총 주문 상품 <span>4</span>개</p>
            <div className="total_price">
                <p>30,000원 이상 구매시 배송비 무료</p>
                <div className="firstB_price">
                    <span className="product_price">{selectedItem.name}</span>
                    <span className="delivery_price">0원</span>
                    <span className="total_price2">135,600원</span>
                </div>
                <div className="price_info">
                    <ul>
                        <li className="product_price">주문금액</li>
                        <li className="delivery_price">배송비</li>
                        <li className="total_price2">결제금액</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default CartItemPrice;