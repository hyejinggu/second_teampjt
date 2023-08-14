import { useState } from "react";

/* const handleWriteSubmit = (data) => {
  // 실제로 데이터를 서버에 전송하거나 저장하는 로직을 구현합니다.
  console.log("글 작성 완료:", data);
};

return (
  <div className="App">
    <h1>홈페이지 글쓰기 페이지</h1>
    <WriteForm onSubmit={handleWriteSubmit} />
  </div>
); */

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      console.log("제목 입력");
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">이미지 첨부</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">작성 완료</button>
      </form>
    </div>
  );
};

export default CreatePost;
