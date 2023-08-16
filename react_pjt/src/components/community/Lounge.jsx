// import "../../css/subpage/community_lounge.css";
import styles from "../../css/subpage/community_lounge.module.css";
import PageNation from "../item/PageNation";
import CommunityPost from "./CommunityPost";
import CreatePost from "./CreatePost";
import SideBar from "./SideBar";
import React, { useReducer, useState, useMemo, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";

// const date = new Date();
export const CreatePostContext = React.createContext();
const date = new Date();

const loungePostArray = [
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/405-20230618_200323.jpg",
    title: "집 앞 공원으로 산책 다녀왔어요.",
    content:
      "발톱이 살짝들려서 발에 붕대하고 있는데 집에만 있음 넘 답답해할까봐 살짝 나와서 산책해줬어요❣️ 잠깐 나와도 이렇게나 좋은지.. 발 다나으면 산책 원없이 해줄꼬에요😆",
    userid: "aaa",
    date: date.toLocaleDateString(),
    recommended: 20,
    views: 50,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/555-image_picker8501982540016886358.jpg",
    title: "병원 진료도 잘받아요🤣",
    content:
      "병원에서 얌전하게 진료도 잘 받는다고 칭찬 받았어요😆 근데 내가 하면 승질 엄청내던데..",
    userid: "bbb",
    date: date.toLocaleDateString(),
    recommended: 13,
    views: 70,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/758-image_picker3081517976164242868.jpg",
    title: "가슴으로 낳아 돈으로 키운다",
    content: "🐶🐶너무맞는말이쟎아요🤍 건강만해다오. 댕댕이들아",
    userid: "ccc",
    date: date.toLocaleDateString(),
    recommended: 34,
    views: 101,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/828-image_picker_8C352A29-9E68-485B-93A4-FEB70D5A6C2D-5498-000007EF9298DA7B.jpg",
    title: "몇 살 같아 보이나요?! ㅎㅎ",
    content: "2011년 1월생이에요 무려 12살! 최강 동안...이지 않나요?!ㅎㅎㅎㅎ",
    userid: "ddd",
    date: date.toLocaleDateString(),
    recommended: 8,
    views: 26,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/273-KakaoTalk_20230617_061331272_01.jpg",
    title: "이 생명체는 누구일까요!",
    content:
      "뭣 좀 하려고 컴퓨터 앞에 앉아있음 꼭 밑에서 등돌리고 저러고 누워있는데 뒷모습 털쪘다요❤️ 너구린가 댕댕인가 착각들 정도",
    userid: "eee",
    date: date.toLocaleDateString(),
    recommended: 21,
    views: 65,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/535-20230528_165840.jpg",
    title: "대형견 산책시 뛰고 또 뛰고~~",
    content:
      "풍산개 수컷입니다. 아침 산책시간만 되면 흥분지수가 업입니다. 견사 문 열자마자(지가 열려고 난리 치죠)",
    userid: "fff",
    date: date.toLocaleDateString(),
    recommended: 23,
    views: 57,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/943-image_picker4043895192963572728.jpg",
    title: "간식ㅎㅎ",
    content: "간식먹고싶어서낼름ㅎ",
    userid: "ggg",
    date: date.toLocaleDateString(),
    recommended: 19,
    views: 42,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/749-image_picker_E73C8D6C-5E69-4E01-A994-AE950E6A4CB8-81072-00001075AD518031.jpg",
    title: "강아지 썬캡 샀어용",
    content:
      "검진 했더니 예방차 자외선 차단 해주라구 해서 썬캡 샀는데 넘 귀여워용~~^^",
    userid: "hhh",
    date: date.toLocaleDateString(),
    recommended: 33,
    views: 87,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/943-image_picker4043895192963572728.jpg",
    title: "간식ㅎㅎ",
    content: "간식먹고싶어서낼름ㅎ",
    userid: "ggg",
    date: date.toLocaleDateString(),
    recommended: 19,
    views: 42,
  },
  {
    image:
      "https://bff-images.bemypet.kr/media/medias/all/749-image_picker_E73C8D6C-5E69-4E01-A994-AE950E6A4CB8-81072-00001075AD518031.jpg",
    title: "강아지 썬캡 샀어용",
    content:
      "검진 했더니 예방차 자외선 차단 해주라구 해서 썬캡 샀는데 넘 귀여워용~~^^",
    userid: "hhh",
    date: date.toLocaleDateString(),
    recommended: 33,
    views: 87,
  },
];

export default function Lounge() {
  const arrayReducer = (state, action) => {
    switch (action.type) {
      // 글 작성 case
      case "create":
        return [action.newPost, ...state];

      // 글 정렬 case
      case "popular":
        return [...state].sort(
          (a, b) => b.recommended + b.views - (a.recommended + a.views)
        );
      case "notice":
        return loungePostArray;

      // 글 검색 case
      case "postTitle":
        return inputValue === ""
          ? state
          : loungePostArray.filter((it) => it.title.includes(inputValue));
      case "postContent":
        return inputValue === ""
          ? state
          : loungePostArray.filter((it) => it.content.includes(inputValue));
      case "postUserId":
        return inputValue === ""
          ? state
          : loungePostArray.filter((it) => it.userid.includes(inputValue));
      default:
        return loungePostArray;
    }
  };

  // 글 검색을 위해 select, input value에 useState 설정
  const [selectedValue, setSelectedValue] = useState("postTitle");
  const [inputValue, setInputValue] = useState("");

  // 글 추가, 정렬을 위해 useReducer 설정
  const [array, dispatch] = useReducer(arrayReducer, loungePostArray);

  // page 이동
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const displayedItemInfo = array.slice(startIndex, startIndex + itemsPerPage);

  const onCreate = (postTitle, postContent) => {
    dispatch({
      type: "create",
      newPost: {
        image:
          "https://bff-images.bemypet.kr/media/medias/all/405-20230618_200323.jpg",
        title: postTitle,
        content: postContent,
        userid: "aaa",
        date: date.toLocaleDateString(),
        recommended: 0,
        views: 0,
      },
    });
  };

  return (
    <div id="wrap" className={styles.lounge_container}>
      {/* 글 정렬, 사이드 바 */}
      <div className={styles.sort}>
        <ul>
          <li onClick={() => dispatch({ type: "popular" })}>인기글</li>
          <li onClick={() => dispatch({ type: "notice" })}>공지사항</li>
          <li>최신순</li>
          <li>오래된순</li>
        </ul>
        <p>총 50개의 글</p>
      </div>
      <div className={styles.content_wrap}>
        <SideBar content="lounge" />

        {/* 글 목록 시작 */}
        <div className={styles.post_wrap}>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>이미지</th>
                <th>제목 및 내용</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>추천수</th>
                <th>조회수</th>
              </tr>
            </thead>
            <CommunityPost loungePostArray={displayedItemInfo} />
          </table>

          {/* 검색 및 글쓰기 */}
          <div className={styles.search_and_post}>
            <div className={styles.search_bar}>
              <form>
                <select
                  onChange={(e) => setSelectedValue(e.target.value)}
                  name="search_condition"
                  id="search_condition"
                >
                  <option value="postTitle">제목</option>
                  <option value="postContent">내용</option>
                  <option value="postUserId">작성자</option>
                </select>
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  placeholder="검색"
                />
              </form>
              <span onClick={() => dispatch({ type: selectedValue })}>🔍</span>
            </div>

            <Link to="/community/createpost">
              <button>글쓰기</button>
            </Link>
          </div>
        </div>
      </div>

      {/* 페이지 이동 */}
      <PageNation setPage={setPage} />

      <CreatePostContext.Provider value={{ onCreate }}>
        <Routes>
          {/* <Route path="/" element={<CreatePost />} /> */}
          <Route path="/createpost/" element={<CreatePost />} />
        </Routes>
      </CreatePostContext.Provider>
    </div>
  );
}
