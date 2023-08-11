import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/common/Main";

// router
import { Route, Routes, Link } from "react-router-dom";
import Login from "./components/login/Login";
import Join from "./components/join/Join";
import Cart from "./components/payment/Cart";
import Board from "./components/board/Board";
import ItemList from "./components/item/ItemList";
import Lounge from "./components/community/Lounge";

function App() {
  return (
    <div className="App" id="wrap">
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/join/*" element={<Join />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/board/*" element={<Board />} />
        <Route path="/itemlist/*" element={<ItemList />} />
        <Route path="/lounge/*" element={<Lounge />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
