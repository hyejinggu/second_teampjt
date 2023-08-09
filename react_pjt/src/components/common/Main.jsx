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

    </div>
  );
};

export default Main;
