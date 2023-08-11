import React from 'react';
import '../../css/subpage/ItemDetail.css'

const ItemDetail = () => {
    return (
        <section id="pagetop">
            <div className="top_area">
                <section className="img_area">
                    <div className="main_img">
                        <img src="../image/item1_1.jpg" alt="상품이미지" />
                    </div>
                    <div className="sub_img">
                        <img src="../image/item1.jpg" alt="상품이미지" />
                        <img src="../image/item1_2.jpg" alt="상품이미지" />
                        <img src="../image/item1_3.jpg" alt="상품이미지" />
                        <img src="../image/item1_4.jpg" alt="상품이미지" />
                        <img src="../image/item1_5.jpg" alt="상품이미지" />
                    </div>
                </section>
                <section className="info_area">
                    <div>상품명</div>
                    <div className="present_pr">알록달록 로프 장난감</div>
                    <div>판매가</div>
                    <div>
                        <span className="sale_info">10%</span>
                        <span className="normal_pr">13,000원</span>
                        <span className="present_pr">11,700원</span>
                    </div>
                    <div>배송비</div>
                    <div>3000원(30,000원 이상 구매시 무료)</div>
                    <div>사이즈</div>
                    <div>
                        <select id="option" name="option">
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                        </select>
                    </div>
                    <div>컬러</div>
                    <div>
                        <select id="option" name="option">
                            <option value="">노랑</option>
                            <option value="">연두</option>
                        </select>
                    </div>
                    <div>
                        <a href="../../cart/html/payment.html">
                            <input type="button" value="바로 구매하기" />
                        </a>
                    </div>
                    <div>
                        <a href="../../cart/html/cart.html">
                            <input type="button" value="장바구니 담기" />
                        </a>
                    </div>
                </section>
            </div>
            <section id="section1" className="section">
                <nav>
                    <a href="#section1">상품상세정보</a>
                    <a href="#section2">상품구매안내</a>
                    <a href="#section3">상품사용후기</a>
                    <a href="#section4">상품Q&A</a>
                </nav>
                <div>
                    <img src="../image/order.jpg" alt="주문마감시간" />
                </div>
                <div>
                    <img src="../image/order1.jpg" alt="" />
                </div>
                <div>
                    <img src="../image/order2.jpg" alt="" />
                </div>
                <div>
                    <img src="../image/order3.jpg" alt="" />
                </div>
                <div>
                    <img src="../image/wash.jpg" alt="세탁방법" />
                </div>
                <button>
                    <a href="../../board/html/board.html">
                        <img src="../image/Inquiry.jpg" alt="1:1문의" />
                    </a>
                </button>
                <h3>상품정보고지</h3>
                <table className="Product_info">
                    <tr>
                        <th>품명 :</th>
                        <td>알록달록 로프 장난감</td>
                    </tr>
                    <tr>
                        <th>제조사 :</th>
                        <td>DanDog</td>
                    </tr>
                    <tr>
                        <th>제조국 :</th>
                        <td>국산</td>
                    </tr>
                    <tr>
                        <th>소비자 상담 관련 전화번호 :</th>
                        <td>1800-1234</td>
                    </tr>
                </table>
            </section>
            <section id="section2" className="section">
                <nav>
                    <a href="#section1">상품상세정보</a>
                    <a href="#section2">상품구매안내</a>
                    <a href="#section3">상품사용후기</a>
                    <a href="#section4">상품Q&A</a>
                </nav>
                <div className="purchase_info">
                    <div className="purchase_left">
                        <div>
                            <h3>[ 배송정보 ]</h3>
                            배송 방법 : 택배
                            <br />
                            배송 지역 : 전국지역
                            <br />
                            배송 비용 : 3,000원
                            <br />
                            배송 기간 : 3일 ~ 7일
                            <br />
                            배송 안내 : 1. 평일(공휴일 제외) 오전 10시 이전 결제 완료 시 당일 출고됩니다.
                            <br />
                            2. 단, 재고가 없거나 주문정보의 누락, 배송지연이 별도 공지된 제품은 제외될 수 있습니다.
                            <br />
                            3. 구매자의 부재, 주문정보 오류 등으로 인한 반송 시 왕복 택배비(6,000원)는 고객 부담입니다.
                            <br />
                            4. 발송 후 택배의 송장번호를 문자로 보내드리며 한진택배 웹사이트에서 조회하실 수 있습니다.
                            <br />
                            5. 일부 산간벽지나 도서지방은 별도의 추가 배송비를 지불하셔야 하는 경우가 있습니다.
                        </div>
                        <div>
                            <h3>[ 서비스문의 ]</h3>
                            대표번호 : 02-899-7892
                            <h4>필독사항</h4>
                            1. 상담시간은 주말/공휴일을 제외한 9~18시까지이며, 12~13시까지는 점심 시간이므로 상담이 어렵습니다.
                            <br />
                            2. 문의 전화가 많은 경우 통화가 지연될 수 있으니 1:1문의 상담을 이용해주시기 바랍니다.
                            <br />
                            3. 택 제거 후에는 교환 및 환불이 불가합니다.
                            <br />
                            4. 모든 브랜드배송 상품은 각 브랜드의 교환/환불 정책에 따르며, 상세페이지에 별도로 기재되어 있습니다.
                            <br />
                            5. 최초 구매하셨던 구매처를 통해서만 교환/반품이 가능합니다.
                        </div>
                    </div>
                    <div className="purchase_right">
                        {/* 상품결제정보 */}
                        <div>
                            <h3>[ 상품결제정보 ]</h3>
                            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
                            확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
                            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
                            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금되지 않은 주문은 자동취소 됩니다.
                        </div>
                        {/* 교환 및 반품정보 */}
                        <div>
                            <h3>[ 교환 및 반품정보 ]</h3>
                            교환 및 사유에 따른 요청 가능 기간
                            <br />
                            1. 반드시 반송 전 먼저 판매자와 연락하시어 반품사유, 택배사, 배송비, 주소 등을 협의해 주세요.
                            <br />
                            2. 구매자의 단순변심 교환은 상품 수령 후 7일 이내이며, 왕복배송비는 구매자 부담입니다.
                            <br />
                            3. 표시/광고와 상이, 상품 하자의 경우 상품 수령 후 3개월 이내 교환이 가능합니다.
                            <br />
                            교환 및 반품이 불가능한 경우
                            <br />
                            1. 반품 요청 기간이 지난 경우
                            <br />
                            2. 구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                            <br />
                            (단, 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)
                            <br />
                            3. 상품을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우
                            <br />
                            4. 구매자의 사용 또는 일부 소비에 의해 상품의 가치가 현저히 감소한 경우
                            <br />
                            5. 시간 경과로 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한 경우
                            <br />
                            6. 개별 주문 생산 등 판매자에게 회복할 수 없는 피해가 예상되어 소비자의 사전 동의를 얻은 경우
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3" className="section">
                <nav>
                    <a href="#section1">상품상세정보</a>
                    <a href="#section2">상품구매안내</a>
                    <a href="#section3">상품사용후기</a>
                    <a href="#section4">상품Q&A</a>
                </nav>
                <div className="review_wrap">
                    <div className="review">
                        <span>REVIEW</span>
                        <span>(4)</span>
                        <hr />
                    </div>
                    <div className="total_score">
                        <div className="grades_1">
                            <span>5.0</span>
                            <p>
                                <strong>100%</strong>의 구매자가 이 상품을 좋아합니다.
                            </p>
                        </div>
                        <div className="grades_2">
                            <ul>
                                <li>아주 좋아요 <span></span> <b>4</b></li>
                                <li>맘에들어요<span></span> <b>0</b></li>
                                <li>보통이에요<span></span> <b>0</b></li>
                                <li>그냥 그래요<span></span> <b>0</b></li>
                                <li>별로예요<span></span> <b>0</b></li>
                            </ul>
                        </div>
                    </div>

                    <div className="user_review">
                        <ul className="review_header">
                            <li className="checking">추천순</li>
                            <li>최신순</li>
                            <li>별점순</li>
                        </ul>
                        <ul>
                            <li className="grades_3">아주 좋아요</li>
                            <li className="user_text_review">
                                만족합니다. 재질도 부들부들하니 저도 물고싶네요
                            </li>
                        </ul>
                        <ul>
                            <li className="grades_3">아주 좋아요</li>
                            <li className="user_text_review">
                                만족합니다. 재질도 부들부들하니 저도 물고싶네요
                            </li>
                        </ul>
                        <ul>
                            <li className="grades_3">아주 좋아요</li>
                            <li className="user_text_review">
                                만족합니다. 재질도 부들부들하니 저도 물고싶네요
                            </li>
                        </ul>
                        <ul>
                            <li className="grades_3">아주 좋아요</li>
                            <li className="user_text_review">
                                만족합니다. 재질도 부들부들하니 저도 물고싶네요
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section4" className="section">
                <nav>
                    <a href="#section1">상품상세정보</a>
                    <a href="#section2">상품구매안내</a>
                    <a href="#section3">상품사용후기</a>
                    <a href="#section4">상품Q&A</a>
                </nav>
                <div>
                    게시물이 없습니다
                </div>
                <a href="../../board/html/board.html">
                    <input type="button" value="상품 문의하기" />
                </a>
            </section>
        </section>
    );
};

export default ItemDetail;