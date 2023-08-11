import Main from "./Main";

// router
import { Route, Routes, Link } from "react-router-dom";
import Login from "../login/Login";
import Profile from "../join/Profile";
import Cart from "../payment/Cart";
import Board from "../board/Board";
import ItemList from "../item/ItemList";
import Lounge from "../community/Lounge";

export default function Body() {
  return (
    <div>
      {/* <Main /> */}

      <Routes>
        <Route path="/main/*" element={<Main />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/board/*" element={<Board />} />
        <Route path="/itemlist/*" element={<ItemList />} />
        <Route path="/lounge/*" element={<Lounge />} />
      </Routes>
    </div>
  );
}
