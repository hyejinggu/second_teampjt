import "./App.css";
import Main from "./components/common/Main";
import Header from "./components/common/Header";
//import Login from "./components/login/Login";
import Footer from "./components/common/Footer";
import { Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      {/*       <Routes>
        <Route path="/main" element={<Main />} />
      </Routes> */}
    </div>
  );
}

export default App;
