
const CartItem = () => {

    return (
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
    )
}

export default CartItem;