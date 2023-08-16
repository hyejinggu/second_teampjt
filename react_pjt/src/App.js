import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/common/Main";

// router
import { Route, Routes, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Join from "./components/join/Join";
import Cart from "./components/cart/Cart";
import Board from "./components/board/Board";
import ItemList from "./components/item/ItemList";
import Lounge from "./components/community/Lounge";
import ItemDetail from "./components/item/ItemDetail";
import CartItem from "./components/cart/CartItem";
import Agree from "./components/join/Agree";
import Details from "./components/join/Details";
import Information from "./components/join/Information";
import Profile from "./components/join/Profile";
import Payment from "./components/payment/Payment";

// 커뮤니티 링크 페이지 import
import CreatePost from "./components/community/CreatePost";
import Neighborhood from "./components/community/Neighborhood";
import Event from "./components/community/Event";
import Community from "./components/community/Community";

//로그인
import FindId from "./components/login/FindId";
import FindPw from "./components/login/FindPw";

import styles from "./css/common/common.module.css";
function App() {
  return (
    <div className="App" id={styles.wrap}>
      <Header />
      <Routes>
        {/* header 링크 */}
        <Route path="/*" element={<Main />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/join/*" element={<Join />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/board/*" element={<Board />} />
        <Route path="/itemlist/*" element={<ItemList />} />
        <Route path="/itemdetail" element={<ItemDetail />} />

        {/* 커뮤니티 링크 */}
        <Route path="/community/*" element={<Community />} />
        <Route path="/lounge/*" element={<Lounge />} />
        <Route path="/event/*" element={<Event />} />
        <Route path="/neighborhood/*" element={<Neighborhood />} />
        <Route path="/createpost/*" element={<CreatePost />} />

        {/* 상세페이지, 장바구니, 결제 */}
        <Route path="/cartitem/*" element={<CartItem />} />

        {/* 로그인 */}
        <Route path="/findid/*" element={<FindId />} />
        <Route path="/findpw/*" element={<FindPw />} />
        {/* <li><NavLink to='/main/*'>로그인</NavLink></li> */}

        <Route path="/profile/*" element={<Profile />} />
        <Route path="/details/*" element={<Details />} />
        <Route path="/agree/*" element={<Agree />} />
        <Route path="/information/*" element={<Information />} />

        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes >



      {/* 회원가입 */}
      <Footer />
    </div>
  );
}

export default App;
