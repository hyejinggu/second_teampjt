import '../../css/join/join.css';
import { Route, Routes, Link, NavLink } from "react-router-dom";

import Agree from './Agree';
import Details from './Details';
import Information from './Information';
import Profile from './Profile';
import { useState } from 'react';



const Join = () => {

    return (
        <>
            <h2 className="title">회원가입</h2>
            <main className="join">
                <div className="img_container">
                    <img src={"/images/join/bg5.jpg"} alt="" />
                </div>

                <div className="right_contents">
                    <ul>
                        <li><NavLink to='/join/profile'>Proflie</NavLink></li>
                        <li><NavLink to='/join/details'>Details</NavLink></li>
                        <li><NavLink to='/join/information'>Information</NavLink></li>
                        <li><NavLink to='/join/agree'>Agree</NavLink></li>
                    </ul>

                    <Routes>
                        <Route path="/profile/*" element={<Profile />} />
                        <Route path="/details/*" element={<Details />} />
                        <Route path="/agree/*" element={<Agree />} />
                        <Route path="/information/*" element={<Information />} />
                    </Routes>
                </div >

            </main >

        </>
    )
}

export default Join;
