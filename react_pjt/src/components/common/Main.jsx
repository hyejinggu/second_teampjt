import Bestseller from "../main/Bestseller";
import Slide from "../main/Slide";
import NoticeBanner from "../main/NoticeBanner";
import "../../css/main.css";

const Main = () => {
  return (
    <div>
      <Slide />
      <Bestseller />
      <NoticeBanner />
    </div>
  );
};

export default Main;
