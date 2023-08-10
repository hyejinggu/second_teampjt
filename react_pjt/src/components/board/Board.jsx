import "../../css/common/header.css";
import "../../css/common/reset.css";
import "../../css/common/common.css";
import "../../css/board/board.css";

<main>
    <div id="board">
        <h1 class="title">고객센터</h1>

        <div class="box_wrap">
            <a class="box_a checking_box" href="./board.html">공지사항</a>
            <a class="box_a" href="./board_FAQ.html">FAQ</a>
            <a class="box_a" href="./board_QnA.html">QnA</a>
        </div>

        <form action="#" method="get">
            <input type="search" name="search" id="board_search" placeholder="검색어를 입력해주세요.">
        </form>

        <!-- <form action="#" method="post"></form> -->
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>6</td>
                    <td>회원정보 이용내역 관련 안내</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후 승인이 완료됩니다. 승인이 완료되면, 카카오
                            톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다.
                        </span>
                    </td>
                </tr>

                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>5</td>
                    <td>적립금 관련안내</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후 승인이 완료됩니다. 승인이 완료되면, 카카오
                            톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다.
                        </span>
                    </td>
                </tr>

                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>4</td>
                    <td>유통기한 임박상품 관련 안내</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후 승인이 완료됩니다. 승인이 완료되면, 카카오
                            톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다.
                        </span>
                    </td>

                </tr>

                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>3</td>
                    <td>상품출고관련안내</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후 승인이 완료됩니다. 승인이 완료되면, 카카오
                            톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다.
                        </span>
                    </td>
                </tr>

                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>2</td>
                    <td>배송안내</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후 승인이 완료됩니다. 승인이 완료되면, 카카오
                            톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다.
                        </span>
                    </td>

                </tr>

                <tr class="question_1">
                    <td>
                        <input type="checkbox" name="checkbox" class="board_checkbox">
                    </td>
                    <td>1</td>
                    <td>입점 및 제휴 문의</td>
                    <td>관리자</td>
                    <td>2023-05-19</td>
                    <td>10</td>
                </tr>

                <tr class="answer">
                    <td colspan="6">
                        <span>
                            [입점절차안내]
                                    공급사 입점 신청> 입점 심의> 입점 상담> 상품 등록> 등록상품 승인> 상품 판매
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="page_shift">
            <a href="#">1</a>
            <a href="">2</a>
            <a href="">3</a>
        </div>

        <div class="button">
            <!-- <a href=""> -->
                <input type="submit" value="글쓰기">
                    <!-- </a> -->
        </div>

    </div>
</main>

export default Board;