
import CartItem from "./CartItem";
import CartItemPrice from "./CartItemPrice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../../css/cart/cart.css";

export default function Cart() {


  const location = useLocation();
  const selectedItem = location.state.selectedItem;

  const [count, setCount] = useState(0);

  const onIncrease = (e) => {
    setCount(count + 1);
    e.preventDefault();
  };

  const onDecrease = (e) => {
    if (count > 0) {
      setCount(count - 1);
      e.preventDefault();
    } else {
      alert('최소 주문수량은 1개 입니다.');
      e.preventDefault();

    }
  };

  const totalPrice = () => {
    return selectedItem.normalPr * count;
  };

  return (
    <div className="cart">
      <form action="#" method="post">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>상품/옵션 정보</th>
              <th>수량</th>
              <th>상품금액</th>
              <th>합계금액</th>
            </tr>
          </thead>
          <tbody>
            <CartItem onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} />
            <CartItem onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} />
          </tbody>
        </table>

        <CartItemPrice onIncrease={onIncrease} onDecrease={onDecrease} totalPrice={totalPrice} count={count} />
        <a href="./payment.html">
          <input type="button" value="구매하기" className="order" />
        </a>
      </form>
    </div>
  );
}
