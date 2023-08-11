import "../../css/login/login.css";

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
            <br />
            <input type="checkbox" name="idsave" value="idsave" />
            <label for="idsave" name="idsave" id="idsave">
              아이디 저장
            </label>

            <div className="idpwfind">
              <a href="#">아이디 찾기</a> |<a href="#">비밀번호 찾기</a>
            </div>
          </form>
          <input type="submit" value="로그인" />
        </div>
      </div>
    </main>
  );
};
export default Login;
