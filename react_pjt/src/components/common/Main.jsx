import Bestseller from "../main/Bestseller";
import Slide from "../main/Slide";
import NoticeBanner from "../main/NoticeBanner";
import MainEvent from "../main/MainEvent";
import "../../css/main/main.css";

const Main = () => {
  return (
    <div>
      <Slide />
      <Bestseller />
      <NoticeBanner />
      <MainEvent />
    </div>
  );
};

export default Main;
