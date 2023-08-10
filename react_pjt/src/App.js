import './App.css';
import Main from "./components/common/Main";
import Header from "./components/common/Header";
//import Login from "./components/login/Login";
import Footer from "./components/common/Footer";
import { Route, Routes, Link, NavLink } from 'react-router-dom';


function App() {
  return (
    {/* <div id="wrap"> */ }
    < div className = "App" >
      <Header />
      <Main />
      <Footer />
  {/* <Login /> */ }
    <h3>  
      <ul>
        <li><NavLink to='/main'>Main</NavLink></li>
        <li><NavLink to='/header'>Header</NavLink></li>
        {/* <li><NavLink to='/login'>Login</NavLink></li> */}
        <li><NavLink to='/footer'>Footer</NavLink></li>
      </ul>
      </h3>
      <Routes>
        <Route path='/main' element={<Main />} />
        {/* <Route path='/topics' element={<Topics />} /> */}
        <Route path='/header/*' element={<Header />} />
        {/* <Route path='/login/*' element={<Login />} /> */}
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div >
  );
}

export default App;
