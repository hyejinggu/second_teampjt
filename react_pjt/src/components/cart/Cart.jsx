
import CartItem from "./CartItem";
import CartItemPrice from "./CartItemPrice";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "../../css/cart/cart.css";

export default function Cart() {


  const location = useLocation();
  const selectedItem = location.state.selectedItem;

  const [quantity, setQuantity] = useState(1);

  // 수량 관리
  const onIncrease = (e) => {
    setQuantity(quantity + 1);
    e.preventDefault();
  };


  // 수량이 0 미만으로 갈때
  const onDecrease = (e) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      e.preventDefault();
    } else {
      alert('최소 주문수량은 1개 입니다.');
      e.preventDefault();

    }
  };

  // 수량에 맞춰 가격 계산
  const totalPrice = () => {
    const originalPr = selectedItem.normalPr;
    const salePr = originalPr - originalPr * (selectedItem.saleInfo / 100);
    const totalpr = salePr * quantity
    return totalpr;
  };

  return (
    <>
      <h2 className="title">장바구니</h2>
      <div className="cart">
        <form action="#" method="post">
          <table>

            <thead>
              <tr>
                <th>상품/옵션 정보</th>
                <th>수량</th>
                <th>상품금액</th>
                <th>합계금액</th>
                {/* <th>
                  <input type="button" value="삭제 "/>
                </th> */}
              </tr>
            </thead>
            <tbody>
              <CartItem
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                totalPrice={totalPrice}
                quantity={quantity}
              />
              {/* <CartItem onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} /> */}
            </tbody>
          </table>

          <CartItemPrice
            totalPrice={totalPrice}
            quantity={quantity}
            selectedItem={selectedItem}
          />
          {/* <CartItemPrice onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} /> */}

          <Link to="/payment" state={{
            selectedItem: selectedItem,
            quantity: quantity, // item 객체를 그대로 전달합니다.
          }}><input type="button" value="구매하기" className="order" /></Link>

        </form>
      </div>
    </>
  );
}
