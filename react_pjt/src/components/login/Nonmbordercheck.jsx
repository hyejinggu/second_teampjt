import "../../css/login/nonmbordercheck.css";

const Nonmbordercheck = () => {
    return (
        <main className="nonmbordercheck">
            <div className="img_container">
                <img src={"/images/login/bg3.png"} alt="" />
            </div>
            <div className="nonmbordercheck_container">
                <div className="nonmbordercheck_box">
                    <h2>비회원 주문조회</h2>
                    <form className="form_wrap">
                        <label for="text">주문자명 : </label>
                        <input type="text" placeholder="주문자명을 입력하세요" required />
                        <label for="number">주문번호 : </label>
                        <input type="number" placeholder="주문 번호를 입력하세요" required />
                        <label for="password">주문자 비밀번호 : </label>
                        <input type="password" placeholder="비밀번호를 입력하세요" required />
                        <input type="submit" value="주문조회하기" />
                    </form>
                </div>
            </div>
        </main>
    );
};
export default Nonmbordercheck;