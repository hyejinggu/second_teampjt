import Bestseller from "../main/Bestseller";
import Slide from "../main/Slide";
import NoticeBanner from "../main/NoticeBanner";
import MainEvent from "../main/MainEvent";
import Promote from "../main/Promote";
import "../../css/main/main.css";
import UserReview from "../main/UserReview";
import Video from "../main/Video";

const Main = () => {
  return (
    <div>
      <Slide />
      <Bestseller />
      <UserReview />
      <NoticeBanner />
      <MainEvent />
      <Promote />
      <Video />

      {/*       <Link to="/profile"></Link>
      <Link to="/cart"></Link>
      <Link to="/board"></Link>
      <Link to="/itemlist"></Link>
      <Link to="/lounge"></Link> */}
    </div>
  );
};

export default Main;
