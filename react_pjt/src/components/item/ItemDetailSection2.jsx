import React from "react";
import styles from "../../css/subpage/ItemDetail.module.css";
import { Link as ScrollLink } from "react-scroll"; // 별칭 사용

const ItemDetailSection2 = () => {
  return (
    <section id="section2" className={styles.section2}>
      <nav className={styles.nav}>
        <ScrollLink to="section1" offset={0}>
          상품상세정보
        </ScrollLink>
        <ScrollLink to="section2" offset={0}>
          상품구매안내
        </ScrollLink>
        <ScrollLink to="section3" offset={0}>
          상품사용후기
        </ScrollLink>
        <ScrollLink to="section4" offset={0}>
          상품Q&A
        </ScrollLink>
      </nav>
      <div className={styles.purchase_info}>
        <div className={styles.purchase_left}>
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
            배송 안내 : 1. 평일(공휴일 제외) 오전 10시 이전 결제 완료 시 당일
            출고됩니다.
            <br />
            2. 단, 재고가 없거나 주문정보의 누락, 배송지연이 별도 공지된 제품은
            제외될 수 있습니다.
            <br />
            3. 구매자의 부재, 주문정보 오류 등으로 인한 반송 시 왕복
            택배비(6,000원)는 고객 부담입니다.
            <br />
            4. 발송 후 택배의 송장번호를 문자로 보내드리며 한진택배 웹사이트에서
            조회하실 수 있습니다.
            <br />
            5. 일부 산간벽지나 도서지방은 별도의 추가 배송비를 지불하셔야 하는
            경우가 있습니다.
          </div>
          <div>
            <h3>[ 서비스문의 ]</h3>
            대표번호 : 02-899-7892
            <h4>필독사항</h4>
            1. 상담시간은 주말/공휴일을 제외한 9~18시까지이며, 12~13시까지는
            점심 시간이므로 상담이 어렵습니다.
            <br />
            2. 문의 전화가 많은 경우 통화가 지연될 수 있으니 1:1문의 상담을
            이용해주시기 바랍니다.
            <br />
            3. 택 제거 후에는 교환 및 환불이 불가합니다.
            <br />
            4. 모든 브랜드배송 상품은 각 브랜드의 교환/환불 정책에 따르며,
            상세페이지에 별도로 기재되어 있습니다.
            <br />
            5. 최초 구매하셨던 구매처를 통해서만 교환/반품이 가능합니다.
          </div>
        </div>
        <div className={styles.purchase_right}>
          {/* 상품결제정보 */}
          <div>
            <h3>[ 상품결제정보 ]</h3>
            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
            있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
            정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할
            수 있습니다. 무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹,
            텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다. 주문시 입력한
            입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로
            입금되지 않은 주문은 자동취소 됩니다.
          </div>
          {/* 교환 및 반품정보 */}
          <div>
            <h3>[ 교환 및 반품정보 ]</h3>
            교환 및 사유에 따른 요청 가능 기간
            <br />
            1. 반드시 반송 전 먼저 판매자와 연락하시어 반품사유, 택배사, 배송비,
            주소 등을 협의해 주세요.
            <br />
            2. 구매자의 단순변심 교환은 상품 수령 후 7일 이내이며, 왕복배송비는
            구매자 부담입니다.
            <br />
            3. 표시/광고와 상이, 상품 하자의 경우 상품 수령 후 3개월 이내 교환이
            가능합니다.
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
            4. 구매자의 사용 또는 일부 소비에 의해 상품의 가치가 현저히 감소한
            경우
            <br />
            5. 시간 경과로 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한
            경우
            <br />
            6. 개별 주문 생산 등 판매자에게 회복할 수 없는 피해가 예상되어
            소비자의 사전 동의를 얻은 경우
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailSection2;
