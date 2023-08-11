import '../../css/join/join.css';

import Agree from './Agree';
import Details from './Details';
import Information from './Information';
import Profile from './Profile';

const Join = () => {

    return (
        <>
            <div class="img_container">
                <img src={"/images/join/bg3"} alt="" />
            </div>
            <Routes>
                <Route path="/profile/*" element={<Profile />} />


            </Routes>
            <Agree />
            <Details />
            <Information />



        </>
    )
}

export default Join;