import "../../css/login/login.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react"; // 추가: React를 import

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // 입력한 아이디
  const [password, setPassword] = useState(""); // 입력한 비밀번호
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지
  const [isChecked, setIsChecked] = useState(false); // 추가: 체크박스 상태 저장

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("id");
    const storedPassword = localStorage.getItem("pw");

    if (username === storedUsername && password === storedPassword) {
      navigate("/main"); // 로그인 성공 시 이동할 페이지로 이동
    } else if (username !== storedUsername) {
      setErrorMessage("아이디가 일치하지 않습니다.");
    } else {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  // 추가: 체크박스 클릭 핸들러
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // 상태 토글
  };

  return (
    <main className="login">
      <div className="img_container">
        <img src={"/images/login/bg3.png"} alt="" />
      </div>

      <div className="login_container">
        <div className="login_box">
          <h2>LogIn</h2>
          <form onSubmit={handleLogin}>
            <input
              required
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="로그인" />
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="saveId">
            <input type="checkbox" name="idsave" id="idsaveCheckbox" value="idsave"
              checked={isChecked} // 체크박스 상태 반영
              onClick={handleCheckboxClick} // 체크박스 클릭 핸들러 연결
            />
            <label htmlfor="idsaveCheckbox" // 'for' 대신 'htmlFor' 사용
              id="idsaveLabel"
              onClick={handleCheckboxClick} // 레이블 클릭 핸들러 연결
            >
              아이디 저장
            </label>
          </div>

          <div className="idpwfind">
            <Link to="/findid">
              <span>아이디찾기</span>
            </Link>
            <b> | </b>
            <Link to="/findpw">
              <span>비밀번호찾기</span>
            </Link>
            {/* <Link to='/main'><span>로그인</span></Link> */}
          </div>

          <div className="nonmbodercheck">
            <Link to="/nonmbordercheck/*">
              <span>비회원 주문조회</span>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};
export default Login;
