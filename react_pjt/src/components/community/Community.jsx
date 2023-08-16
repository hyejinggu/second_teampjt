import Lounge from "./Lounge";
import Event from "./Event";
import Neighborhood from "./Neighborhood";
import styles from "../../css/subpage/community_lounge.module.css";
// import React, { useReducer, useState, useContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <div className={styles.title}>
        <strong>
          <NavLink to="/community/lounge">라운지</NavLink>
          <NavLink to="/community/event">이벤트</NavLink>
          <NavLink to="/community/neighborhood">우리 동네</NavLink>
        </strong>
      </div>

      <Routes>
        {/* <Route path="/*" element={<Lounge />} /> */}
        <Route path="/lounge/*" element={<Lounge />} />
        <Route path="/event/*" element={<Event />} />
        <Route path="/neighborhood/*" element={<Neighborhood />} />
      </Routes>
    </div>
  );
};

export default Community;
