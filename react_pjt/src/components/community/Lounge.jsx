// import "../../css/subpage/community_lounge.css";
import styles from "../../css/subpage/community_lounge.module.css";
import PageNation from "../item/PageNation";
import CommunityPost from "./CommunityPost";
import CreatePost from "./CreatePost";
import SideBar from "./SideBar";
import React, { useReducer, useState, useMemo, useContext } from "react";
import { CreatePostContext } from "./Community";
import { Link, Routes, Route } from "react-router-dom";

// const date = new Date();
// export const CreatePostContext = React.createContext();
const date = new Date();

export default function Lounge() {
  const { loungePostArray } = useContext(CreatePostContext);

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

  // // 글 추가 dispatch
  // const [postTitle, setPostTitle] = useState("");
  // const [postContent, setPostContent] = useState("");

  // const onCreate = (postTitle, postContent) => {
  //   dispatch({
  //     type: "create",
  //     newPost: {
  //       image:
  //         "https://bff-images.bemypet.kr/media/medias/all/405-20230618_200323.jpg",
  //       title: postTitle,
  //       content: postContent,
  //       userid: "aaa",
  //       date: date.toLocaleDateString(),
  //       recommended: 0,
  //       views: 0,
  //     },
  //   });
  // };
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

            <Link to="/createpost">
              <button>글쓰기</button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/createpost/*" element={<CreatePost />} />
        </Routes>
      </div>

      {/* 페이지 이동 */}
      <PageNation setPage={setPage} />
    </div>
  );
}
