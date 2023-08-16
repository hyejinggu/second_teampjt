import Lounge from "./Lounge";
import Event from "./Event";
import Neighborhood from "./Neighborhood";
import styles from "../../css/subpage/community_lounge.module.css";
import { NavLink } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <div className={styles.title}>
        <strong>
          <NavLink to="/lounge">라운지</NavLink>
          <NavLink to="/event">이벤트</NavLink>
          <NavLink to="/neighborhood">우리 동네</NavLink>
        </strong>
      </div>
      <Lounge />
      <Event />
      <Neighborhood />
    </div>
  );
};

export default Community;
