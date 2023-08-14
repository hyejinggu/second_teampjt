import styles from "../../css/subpage/community_event.module.css";
import CommunityTitle from "./CommunityTitle";

export default function Event() {
  return (
    <div id="wrap" className={styles.event_container}>
      <CommunityTitle />
      <ul className={styles.event_type}>
        <li>전체 이벤트</li>
        <li>구매자 이벤트</li>
        <li>체험단</li>
      </ul>
      <div className={styles.event_content}>
        <EventList />
      </div>
      <div className={styles.page_shift}></div>
    </div>
  );
}

const eventArray = [
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2023/08/01/fba10a676bd1d9b72d9dadc41e923f56.jpg",
    eventPeriod: 20230830,
  },
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2022/06/08/5a8256bdd4b8ef31d1a97b0dfd40611c.jpg",
    eventPeriod: 20230826,
  },
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2023/02/06/ea8d745cf462c64511f6cdec5c461884.jpg",
    eventPeriod: 20230822,
  },
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2023/04/12/20bc811794c0d25b896c4ca3b947e4bb.jpg",
    eventPeriod: 20230815,
  },
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2022/07/27/67e34122595af3b52ed157839000a1a4.jpg",
    eventPeriod: 20230811,
  },
  {
    eventImage:
      "https://pethroom.com/file_data/pepem1//2023/05/03/f18709e97bce81a66c8dadbce0466dac.jpg",
    eventPeriod: 20230730,
  },
];

const EventList = () => {
  return (
    <ul>
      {eventArray.map((event) => {
        <li>
          <p>종료된 이벤트입니다.</p>
          <div className={styles.opacity_box}></div>
          <img src={event.eventImage} alt="event_img1" />
        </li>;
      })}
    </ul>
  );
};
