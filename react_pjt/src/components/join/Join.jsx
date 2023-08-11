import '../../css/join/join.css';
import { Route, Routes, Link, NavLink } from "react-router-dom";

import Agree from './Agree';
import Details from './Details';
import Information from './Information';
import Profile from './Profile';


const Join = () => {

    return (
        <>
            <div className="img_container">
                <img src={"/images/join/bg3"} alt="" />
            </div>

            <div className="right_contents">
                <ul>
                    <li><NavLink to='/profile'>Proflie</NavLink></li>
                    <li><NavLink to='/details'>Details</NavLink></li>
                    <li><NavLink to='/agree'>Agree</NavLink></li>
                    <li><NavLink to='/information'>Information</NavLink></li>
                </ul>

                <Routes>
                    <Route path="/profile/*" element={<Profile />} />
                    <Route path="/agree/*" element={<Agree />} />
                    <Route path="/details/*" element={<Details />} />
                    <Route path="/information/*" element={<Information />} />
                </Routes>
            </div >


        </>
    )
}

export default Join;