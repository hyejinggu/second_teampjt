import "../../css/cart/cart.css";
import CartItem from "./CartItem";
import CartItemPrice from "./CartItemPrice";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const cartItem = location.state.item;

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
            <CartItem cartItem={cartItem} />
            <CartItem />
            <CartItem />
          </tbody>
        </table>

        <CartItemPrice />

        <a href="./payment.html">
          <input type="button" value="구매하기" className="order" />
        </a>
      </form>
    </div>
  );
}
