import styles from "../../css/subpage/create_post.module.css";
import { useState, useRef } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      titleRef.current.innerText = "제목 입력";
    } else if (!content) {
      console.log("내용 입력");
    } else return;
    // onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <h2>글쓰기</h2>
      <div className={styles.form_wrap}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title_wrap}>
            <label htmlFor="title">제목</label>
            <select name="commmu_board_select" id="commmu_board_select">
              <option value="general">자유 게시판</option>
              <option value="consult">고민 상담소</option>
              <option value="sharing_info">지식 공유</option>
              <option value="find_friends">친구 찾기</option>
            </select>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.title_alert} ref={titleRef}></div>
          </div>
          <div className={styles.content_wrap}>
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles.image_wrap}>
            <label htmlFor="image">이미지 첨부</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <button type="submit">작성 완료</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
