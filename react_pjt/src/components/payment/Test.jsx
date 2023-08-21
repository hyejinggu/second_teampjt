import React from "react";
import styles from '../../css/payment/payment.module.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../common/Modal";

const Payment = () => {
    const location = useLocation();
    const selectedItem = location.state.selectedItem;
    const quantity = location.state.quantity;

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const totalPrice = () => {
        const originalPr = selectedItem.normalPr;
        const salePr = originalPr - originalPr * (selectedItem.saleInfo / 100);
        const totalpr = salePr * quantity
        const totalWithDelivery = totalpr >= 50000 ? totalpr : totalpr + 3000;
        return totalWithDelivery;
    };

    return (
        <div>
            <h2 className={styles.title}>주문/결제</h2>

            <form action="" method="" className={styles.main}>
                {/* <!--배송지정보--> */}

                <h2 className={styles.title}>배송지</h2>
                <div className={styles.address_input}>
                    <table>
                        <tr>
                            <th>
                                <label for="name">받는사람</label>
                            </th>
                            <td colSpan="">
                                <input type="text" id="name" name="name" required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="address">주소</label>
                            </th>
                            <td colSpan="">
                                <input type="text" id="address" name="address" required placeholder="도로명, 지번, 건물명 등을 입력하세요" />
                                <input type="text" id="address" name="address" required placeholder="상세주소를 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="phone">전화번호</label>
                            </th>
                            <td>
                                <input type="tel" id="phone1" name="phone1" required pattern="[0-9]{3}" placeholder="010" />
                                <input type="tel" id="phone2" name="phone2" required pattern="[0-9]{3,4}"
                                    placeholder="1234" />
                                <input type="tel" id="phone3" name="phone3" required pattern="[0-9]{4}" placeholder="5678" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="email">이메일</label>
                            </th>
                            <td colSpan="">
                                <input type="email" id="email" name="email" required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="payment-method">결제방법</label>
                            </th>
                            <td>
                                <select id="payment-method" name="payment-method">
                                    <option value="credit-card">신용카드</option>
                                    <option value="bank-transfer">계좌이체</option>
                                    <option value="tel">휴대전화</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <Link to="/itemList" className={styles.img_area}>
                        <img src="https://i.pinimg.com/originals/7e/35/0c/7e350c22750cea72abeb1ab755ad43d0.gif" alt="" />
                    </Link>
                    {/* <!-- 비회원 주문조회 비밀번호--> */}
                    <div className={styles.pass_input}>
                        <hr />
                        <h2 className={styles.title}>비회원 주문조회 비밀번호</h2>
                        <table>
                            <tr>
                                <th>
                                    <label for="password">비밀번호</label>
                                </th>
                                <td>
                                    <input type="password" id="password" name="password" placeholder="6자~16자" required
                                        minlength="6" maxlength="16" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <hr />

                {/* <!-- 주문상품 --> */}

                <h2 className={styles.title}>주문상품</h2>
                <div className={styles.desc}>
                    <table>
                        <thead>
                            <tr>
                                <th>상품/옵션 정보</th>
                                <th>수량</th>
                                <th>상품금액</th>
                                <th>합계금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className={styles.thumb}>
                                        <img src={selectedItem.image[1]} alt="상품이미지" />
                                    </div>
                                    <h3 className={styles.name}>{selectedItem.name}</h3>
                                    {/* <span>{selectedItem.colors} / </span>
                                    <span>{selectedItem.sizes}</span> */}
                                </td>
                                <td>
                                    <span className={styles.quantity}>수량 : {quantity}개</span>
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <span className={styles.sale_info}>{selectedItem.saleInfo}%</span>
                                            <span className={styles.normal_pr}>{selectedItem.normalPr.toLocaleString("ko")}원</span>
                                            <span className={styles.present_pr}>
                                                {(
                                                    selectedItem.normalPr -
                                                    (selectedItem.normalPr * selectedItem.saleInfo) / 100
                                                ).toLocaleString("ko")}원
                                            </span>
                                        </li>
                                        <li>
                                            <span className={styles.free_delivery}>3000원(50,000원 이상 구매시 무료)</span>
                                        </li>
                                    </ul>
                                </td>
                                <td className={styles.total}>
                                    <span>{totalPrice()}원</span>
                                    <span>(배송비 포함금액)</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />

                {/* <!--약관 동의--> */}

                <section>
                    <div className={styles.content}>
                        <h2 className={styles.title}>이용 약관</h2>
                        <p>
                        </p>
                        <div className={styles.checkbox_wrapper}>
                            <label>
                                <input type="checkbox" id="agree-checkbox" required />
                                약관에 동의합니다.
                            </label>
                        </div>

                        <h2 className={styles.title}>개인 정보 처리 방침</h2>
                        <p>
                        </p>

                        <div className={styles.checkbox_wrapper}>
                            <label>
                                <input type="checkbox" id="agree-checkbox" required />
                                개인 정보 처리 방침에 동의합니다.
                            </label>
                        </div>
                    </div>
                </section>
                <div className={styles.button}>
                    <Link
                        to="/itemList"
                    >
                        <input type="button" value="할인 상품 더 보기" />
                    </Link>

                    <input type="submit" value="구매하기" onClick={openModal} />
                    {isModalOpen && (
                        <Modal
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            modalContent="상품 구매가 완료되었습니다."
                            modalAfterPath={'/main/*'}
                        />
                    )}
                </div>
            </form>
        </div>
    );
}

export default Payment;