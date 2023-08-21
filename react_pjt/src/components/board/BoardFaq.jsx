import "../../css/board/board.css";
import { Link } from "react-router-dom";
import React from 'react';

/* join 참고해서 맨위에 import, import Route추가
table을 배열로 수정
const로 수정  */

// 게시판 글 목록 배열
const BoardFaq = () => {

    const boardArray = [
        {
            number: 1,
            title: "입점 및 제휴 문의",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "입점절차안내 공급사 입점 신청 입점 심의 입점 상담 상품 등록,등록상품 승인 상품 판매"
        },

        {
            number: 2,
            title: "배송안내",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후, 승인이 완료됩니다.승인이 완료되면, 카카오 톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다."
        },

        {
            number: 3,
            title: "상품출고관련안내",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후, 승인이 완료됩니다.승인이 완료되면, 카카오 톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다."
        },

        {
            number: 4,
            title: "유통기한 임박상품 관련 안내",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후, 승인이 완료됩니다.승인이 완료되면, 카카오 톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다."
        },

        {
            number: 5,
            title: "적립금 관련안내",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후, 승인이 완료됩니다.승인이 완료되면, 카카오 톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다."
        },

        {
            number: 6,
            title: "회원정보 이용내역 관련 안내",
            writer: "관리자",
            date: "2023-05-19",
            view: "10",
            answer: "회원가입 신청 후, 영업시간 기준 1일 이내에 담당자 확인후, 승인이 완료됩니다.승인이 완료되면, 카카오 톡 알림톡으로 회원가입 승인 완료 알림을 보내드리고 있습니다."
        },
    ];

    // 고객센터 게시판 종류
    return (
        <main>
            <div id="board">
                <h1 className="title">고객센터</h1>

                <div className="box_wrap">
                    <Link to="./board">
                        <span className="box_a">공지사항</span>
                    </Link>
                    <Link to="./board_FAQ">
                        <span className="box_a">FAQ</span>
                    </Link>
                    <Link to="./board_QnA">
                        <span className="box_a">QnA</span>
                    </Link>
                </div>

                {/* 검색창 */}
                <form action="#" method="get">
                    <input
                        type="search"
                        name="search"
                        id="board_search"
                        placeholder="검색어를 입력해주세요." />
                    <input type="submit" value="검색" />
                </form>
                <form action="#" method="post"></form>

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
                        {boardArray.map((item) => (
                            <React.Fragment key={item.number}>
                                <tr className="question_1">
                                    <td>
                                    </td>
                                    <td>{item.number}</td>
                                    <td>{item.title}</td>
                                    <td>{item.writer}</td>
                                    <td>{item.date}</td>
                                    <td>{item.view}</td>
                                </tr>
                                <tr className="answer">
                                    <td colSpan="6">
                                        <span>{item.answer}</span>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                <div className="page_shift">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>

                <div className="button">
                    <input type="submit" value="글쓰기" />
                </div>
            </div>
        </main>
    );
};

export default BoardFaq;
