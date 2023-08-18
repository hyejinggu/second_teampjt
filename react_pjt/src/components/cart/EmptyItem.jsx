import { text } from "@fortawesome/fontawesome-svg-core";
import CartItemPrice from "./CartItemPrice";
const EmptyItem = () => {
    return (
        <>
            <h2 className="title">장바구니</h2>
            <div className="cart">
                <form action="#" method="post">
                    <table>

                        <tbody style={{ 'display': 'flex' }}>
                            <td style={{ 'line-height': '100px', "text-align": "center", "width": "100%" }}>상품이 없습니다.</td>
                        </tbody>
                    </table>



                </form>
            </div >
        </>
    );
}

export default EmptyItem;