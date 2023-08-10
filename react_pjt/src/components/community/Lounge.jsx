import "../../css/subpage/community_lounge.css";
import PageNation from "../item/PageNation";
import CommunityPost from "./CommunityPost";

export default function Lounge() {
  const arrayReducer = (state, action) => {
    switch (action.rype) {
      case "popular":
        return [...state].sort(
          (a, b) => a.recommended + a.views - (b.recommended + b.views)
        );
      case "notice":
        return state;
      default:
        return state;
    }
  };

  const [array, dispatch] = useReducer(arrayReducer, loungePostArray);
  return (
    <div id="wrap">
      <div class="container">
        <div class="title">
          <strong>
            <a href="#">라운지</a>
            <a href="">정보 공유&amp;리뷰</a>
            <a href="">QnA</a>
            <a href="">이벤트</a>
          </strong>
        </div>

        <div class="post sort">
          <ul>
            <li onClick={() => dispatch({ type: "popular" })}>인기글</li>
            <li onClick={() => dispatch({ type: "notice" })}>공지사항</li>
            <li>최신순</li>
            <li>오래된순</li>
          </ul>
          <p>총 50개의 글</p>
        </div>

        <div class="content_wrap">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>이미지</th>
                <th>제목 및 내용</th>
                <th>날짜</th>
                <th>추천수</th>
                <th>조회수</th>
              </tr>
            </thead>
            <CommunityPost loungePostArray={array} />
          </table>
        </div>
      </div>
      <PageNation />
    </div>
  );
}
