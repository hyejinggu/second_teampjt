
import CartItem from "./CartItem";
import CartItemPrice from "./CartItemPrice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../../css/cart/cart.css";

export default function Cart() {


  const location = useLocation();
  const selectedItem = location.state.selectedItem;

  const [count, setCount] = useState(0);

  // 수량 관리
  const onIncrease = (e) => {
    setCount(count + 1);
    e.preventDefault();
  };


  // 수량이 0 미만으로 갈때
  const onDecrease = (e) => {
    if (count > 0) {
      setCount(count - 1);
      e.preventDefault();
    } else {
      alert('최소 주문수량은 1개 입니다.');
      e.preventDefault();

    }
  };

  // 수량에 맞춰 가격 계산
  const totalPrice = () => {
    return selectedItem.normalPr * count;
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
              <CartItem onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} />
            </tbody>
          </table>

          <CartItemPrice onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} />
          <a href="./payment.html">
            <input type="button" value="구매하기" className="order" />
          </a>
        </form>
      </div>
    </>
  );
}
