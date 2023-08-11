import "../../css/subpage/subpage_itemlist.css";
import { Routes, Route, NavLink } from "react-router-dom";
import ItemList from "./ItemList";

export default function PageNation() {
  return (
    <div className="page_shift">
      <NavLink to="/itemlist">
        <span>1</span>
      </NavLink>
      <NavLink>
        <span>2</span>
      </NavLink>
      <NavLink>
        <span>3</span>
      </NavLink>

      <Routes>
        <Route path="/itemlist" element={<ItemList />} />
      </Routes>
    </div>
  );
}
