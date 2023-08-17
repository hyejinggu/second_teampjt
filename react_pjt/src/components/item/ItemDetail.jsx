import React, { useState } from "react";
import styles from "../../css/subpage/ItemDetail.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ItemDetailSection1 from "./ItemDetailSection1"
import ItemDetailSection2 from "./ItemDetailSection2";
import ItemDetailSection3 from "./ItemDetailSection3";
import ItemDetailSection4 from "./ItemDetailSection4";

const ItemDetail = () => {
    const location = useLocation();
    const selectedItem = location.state.selectedItem;

    // 수량 설정
    const [quantity, setQuantity] = useState(1); // 초기 수량 설정

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value)); // 수량 변경 시 상태 업데이트
    };


    // ======== 가격 계산 및 형식 변환 함수 시작 ========
    const formatter = new Intl.NumberFormat("ko-KR", {
        //   style: "currency",
        //   currency: "USD", // 통화 코드를 원하는 통화로 변경
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    const presentPr = () => {
        const originalPr = selectedItem.normalPr;
        const salePr = originalPr - originalPr * (selectedItem.saleInfo / 100);
        return formatter.format(salePr);
    };

    const [mainImage, setMainImage] = useState(selectedItem.image[1]); // 초기 메인 이미지

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl); // 클릭한 이미지를 메인 이미지로 설정
    };

    return (
        <div className={styles.detail_wrap}>
            <form>
                <div className={styles.top_area}>
                    <section className={styles.img_area}>
                        {/* 메인 이미지 */}
                        <div className={styles.main_img}>
                            <img src={mainImage} alt="상품이미지" />
                        </div>

                        {/* 서브 이미지들 */}
                        <div className={styles.sub_img}>
                            {selectedItem.image.map((imageUrl, index) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt={`상품 이미지 ${index}`}
                                    onClick={() => handleImageClick(imageUrl)} // 이미지 클릭 시 처리
                                />
                            ))}
                        </div>
                    </section>
                    <section className={styles.info_area}>
                        {/* 상품명 */}
                        <div>상품명</div>
                        <div className={styles.present_pr}>{selectedItem.name}</div>
                        {/* 판매가 */}
                        <div>판매가</div>
                        <div>
                            <span className={styles.sale_info}>{selectedItem.saleInfo}%</span>
                            <span className={styles.normal_pr}>{selectedItem.normalPr}원</span>
                            <span className={styles.present_pr}>{presentPr()}원</span>
                        </div>
                        {/* 배송비 */}
                        <div>배송비</div>
                        <div>2,500원(30,000원 이상 구매시 무료)</div>
                        {/* 사이즈 */}
                        <div>사이즈</div>
                        <div>
                            <select id="option" name="sizeOption">
                                {selectedItem.sizes.map((size, index) => (
                                    <option key={index} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* 컬러 */}
                        <div>컬러</div>
                        <div>
                            <select id="option" name="colorOption">
                                {selectedItem.colors.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* 수량 */}
                        <div>수량</div>
                        <div>
                            <select
                                id="option"
                                name="quantityOption"
                                value={quantity}
                                onChange={handleQuantityChange} // 수량 변경 시 처리
                            >
                                {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                                    <option key={count} value={count}>
                                        {count}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* 구매 버튼 */}
                        <div>
                            <Link
                                to="/payment"
                                state={{
                                    selectedItem: selectedItem,
                                    quantity: quantity,
                                }}
                            >
                                <input
                                    type="button"
                                    value="바로 구매하기"
                                    className={styles.button}
                                />
                            </Link>
                        </div>
                        {/* 장바구니 버튼 */}
                        <div>
                            <Link
                                to="/cart"
                                state={{
                                    selectedItem: selectedItem, // item 객체를 그대로 전달합니다.
                                }}
                            >
                                <input
                                    type="button"
                                    value="장바구니 담기"
                                    className={styles.button}
                                />
                            </Link>
                        </div>
                    </section>


                </div>
                <ItemDetailSection1 selectedItem={selectedItem} />
                <ItemDetailSection2 selectedItem={selectedItem} />
                <ItemDetailSection3 selectedItem={selectedItem} />
                <ItemDetailSection4 selectedItem={selectedItem} />
            </form>
        </div>
    );
};

export default ItemDetail;
