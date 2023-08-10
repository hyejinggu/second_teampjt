import "../../css/common/header.css";
import "../../css/common/reset.css";
import "../../css/common/common.css";
import { Route, Routes, Link } from "react-router-dom";
import ItemList from "../item/ItemList";

/* import "../../css/common/main.css"
import "../../css/common/community.css" */

const Header = () => {
  return (
    <header>
      <div className="menu_list">
        <a href="./index.html">
          <img src={"/images/header/logo.png"} alt="로고" className="logo" />
        </a>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="검색어를 입력해주세요."
        />

        <ul>
          <li>
            <a href="./react_pjt/login/html/login.html">
              <img src={"/images/header/login_img.png"} alt="" /> 로그인
            </a>
          </li>
          <li>
            <a href="./react_pjt/join/html/profile.html">
              <img src={"/images/header/join_img.png"} alt="" />
              회원가입
            </a>
          </li>
          <li>
            <a href="./react_pjt/cart/html/cart.html">
              <img src={"/images/header/cart_img.png"} alt="" />
              장바구니
            </a>
          </li>
          <li>
            <a href="./react_pjt/board/html/board.html">
              <img src={"/images/header/customer_service_img.png"} alt="" />
              고객센터
            </a>
          </li>
        </ul>
      </div>
      <ul class="gnb_list">
        <li>
          <a href="#">
            <img src={"/images/header/food_img.png"} alt="" />
            간식&#183;사료
          </a>
        </li>
        <li>
          <Link to="/itemlist">
            <img src={"/images/header/toy_img.png"} alt="" />
            장난감
          </Link>
        </li>
        <li>
          <a href="#">
            <img src={"/images/header/living_img.png"} alt="" />
            리빙&#183;패션
          </a>
        </li>
        <li>
          <a href="#">
            <img src={"/images/header/stroll_img.png"} alt="" />
            산책&#183;케어
          </a>
        </li>
        <li>
          <a href="../../subpage/html/community_lounge.html">
            <img src={"/images/header/community_img.png"} alt="" />
            커뮤니티
          </a>
        </li>
      </ul>

      <Routes>
        <Route path="/itemlist" element={<ItemList />} />
      </Routes>
    </header>
  );
};
export default Header;

// {'/header/cart_img.png'}
