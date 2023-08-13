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

// 커뮤니티 링크 페이지 import
import CreatePost from "./components/community/CommunityPost";

function App() {
  return (
    <div className="App" id="wrap">
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
        <Route path="/lounge/*" element={<Lounge />} />
        <Route path="/itemdetail" element={<ItemDetail />} />

        {/* 커뮤니티 링크 */}
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
