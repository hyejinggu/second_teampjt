import React from 'react';
import styles from "../../css/subpage/ItemDetail.module.css";
import { Link as RouterLink } from "react-router-dom"; // 별칭 사용
import { Link as ScrollLink } from 'react-scroll'; // 별칭 사용

const ItemDetailSection3 = () => {
    return (
        <section id="section3" className={styles.section3}>
            <nav className={styles.nav}>
                <ScrollLink
                    to="section1"
                    offset={0}
                >
                    상품상세정보
                </ScrollLink>
                <ScrollLink
                    to="section2"
                    offset={0}
                >
                    상품구매안내
                </ScrollLink>
                <ScrollLink
                    to="section3"
                    offset={0}
                >
                    상품사용후기
                </ScrollLink>
                <ScrollLink
                    to="section4"
                    offset={0}
                >
                    상품Q&A
                </ScrollLink>
            </nav>
            <div className={styles.review_wrap}>
                <div className={styles.review}>
                    <span>REVIEW</span>
                    <span>(4)</span>
                    <hr />
                </div>
                <div className={styles.total_score}>
                    <div className={styles.grades_1}>
                        <span>5.0</span>
                        <p>
                            <strong>100%</strong>의 구매자가 이 상품을 좋아합니다.
                        </p>
                    </div>
                    <div className={styles.grades_2}>
                        <ul>
                            <li>
                                아주 좋아요 <span></span> <b>4</b>
                            </li>
                            <li>
                                맘에들어요<span></span> <b>0</b>
                            </li>
                            <li>
                                보통이에요<span></span> <b>0</b>
                            </li>
                            <li>
                                그냥 그래요<span></span> <b>0</b>
                            </li>
                            <li>
                                별로예요<span></span> <b>0</b>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.user_review}>
                    <ul className={styles.review_header}>
                        <li className={styles.checking}>추천순</li>
                        <li>최신순</li>
                        <li>별점순</li>
                    </ul>
                    <ul>
                        <li className={styles.grades_3}>아주 좋아요</li>
                        <li className={styles.user_text_review}>
                            만족합니다. 재질도 부들부들하니 저도 물고싶네요
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.grades_3}>아주 좋아요</li>
                        <li className={styles.user_text_review}>
                            만족합니다. 재질도 부들부들하니 저도 물고싶네요
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.grades_3}>아주 좋아요</li>
                        <li className={styles.user_text_review}>
                            만족합니다. 재질도 부들부들하니 저도 물고싶네요
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.grades_3}>아주 좋아요</li>
                        <li className={styles.user_text_review}>
                            만족합니다. 재질도 부들부들하니 저도 물고싶네요
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ItemDetailSection3;
