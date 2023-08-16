import "../../css/login/findid.css";

const FindId = () => {
    return (
        <main className="login">
            

            <div className="login_container">
                <div className="login_box">
                    <h2>아이디찾기</h2>
                    <form>
                        <input type="text" placeholder="아이디" required />
                        <input type="password" placeholder="비밀번호" required />
                        <input type="submit" value="로그인" />
                    </form>
                </div>
            </div>
        </main>
    );
};
export default FindId;