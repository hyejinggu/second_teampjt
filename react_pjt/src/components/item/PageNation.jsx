import "../../css/subpage/subpage_itemlist.css";
import { Routes, Route, NavLink } from "react-router-dom";

export default function PageNation() {
  return (
    <div className="page_shift">
      <NavLink to="/">1</NavLink>
      <NavLink>2</NavLink>
      <NavLink>3</NavLink>

      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}
