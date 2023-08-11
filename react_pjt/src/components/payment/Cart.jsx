import '../../css/cart/cart.css';


export default function Cart() {
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
            <tr>
              <td>
                <input type="checkbox" />

              </td>
              <td>
                <a href="../../subpage/html/subpage2.html">
                  <img src={"/images/cart/exImg.jpg"} alt="이미지" />
                </a>
                <span className="text-ellipsis">[네츄럴코어 사료 연어 7kg] 할인 적용</span>
              </td>
              <td>1개
                <input type="button" value="옵션/수량변경" />
              </td>
              <td className="price">
                <span className="sale_info">30%</span>
                <del>59,000원</del>
                <span className="sale_price">41,300원</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />

              </td>
              <td>
                <a href="../../subpage/html/subpage2.html">
                  <img src={"/images/cart/exImg.jpg"} alt="이미지" />
                </a>
                <span className="text-ellipsis">[네츄럴코어 사료 연어 7kg]</span>
              </td>
              <td>2개
                <input type="button" value="옵션/수량변경" />
              </td>
              <td className="price">
                <span className="sale_info">30%</span>
                <del>59,000원</del>
                <span className="sale_price">41,300원</span>
              </td>
              <td className="total">82,600원</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />

              </td>
              <td>
                <a href="../../subpage/html/subpage2.html">
                  <img src={"images/subpage/item1_2.jpg"} alt="이미지" />
                </a>
                <span className="text-ellipsis">[알록달록 로프 장난감]</span>
              </td>
              <td>1개
                <input type="button" value="옵션/수량변경" />
              </td>
              <td className="price">
                <span className="sale_info">10%</span>
                <del>13,000원</del>
                <span className="sale_price">11,700원</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>


        <p className='total_product'>총 주문 상품 <span>4</span>개</p>
        <div className="total_price">
          <p>30,000원 이상 구매시 배송비 무료</p>
          <div className="firstB_price">
            <span className="product_price">135,600원</span>
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
        <a href="./payment.html">
          <input type="button" value="구매하기" className="order" /></a>
      </form>
    </div>
  )
}
