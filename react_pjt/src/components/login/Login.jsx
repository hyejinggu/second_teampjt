import "../../css/login/login.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <div className="img_container">
        <img src={"/images/login/bg3.png"} alt="" />
      </div>

      <div className="login_container">
        <div className="login_box">
          <h2>LogIn</h2>
          <form>
            <input type="text" placeholder="아이디" required />
            <input type="password" placeholder="비밀번호" required />
            <input type="submit" value="로그인" />
          </form>

          <div className="saveId">
            <input type="checkbox" name="idsave" value="idsave" />
            <label for="idsave" name="idsave" id="idsave">
              아이디 저장
            </label>
          </div>

          <div className="idpwfind">
            <Link to='/findid'><span>아이디찾기</span></Link>
            <b> | </b>
            <Link to='/findpw'><span>비밀번호찾기</span></Link>
            {/* <li><NavLink to='/main/'>로그인</NavLink></li> */}
          </div>

        </div>
      </div>

    </main>
  );
};
export default Login;
