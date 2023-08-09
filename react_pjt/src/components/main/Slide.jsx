import { useState, useEffect } from "react";
import "../../css/main/main.css";

const Slide = () => {
  const slideImages = [
    {
      id: 0,
      img: "https://cdnimg.dogpang.com/catpang/data/event/banner/sno_maintopnew_202307261136213.jpg",
    },
    {
      id: 1,
      img: "https://shop-phinf.pstatic.net/20230412_132/1681308834579IXC0M_JPEG/PC_main_bnr_C0CCC1EEC4AD_BFC3B6F3C0CCC7C110kg_C3E2BDC3.jpg?type=m10000_10000",
    },
    {
      id: 2,
      img: "https://shop-phinf.pstatic.net/20230508_291/1683539721258Oj7Em_JPEG/PC-1.jpg?type=m10000_10000",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // 클리어 필요
  }, [currentIdx]);

  // 이미지 앞, 뒤로 넘어가는 함수
  const preSlide = () => {
    setCurrentIdx(
      (preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length
    );
  };
  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  };

  return (
    <div className="banner_wrap">
      <div className="slide_banner">
        <img onClick={preSlide} src={"/images/main/arrow_left.svg"} />
        {/* <div className="slide_container"> */}
        {slideImages.map((image, index) => (
          <img
            key={index}
            className={`banner_image ${index === currentIdx ? "active" : ""}`}
            src={image.img}
            // src={slideImages[currentIdx].img}
            alt={`slide ${index}`}
          />
        ))}
        {/* </div> */}
        <img onClick={nextSlide} src={"/images/main/arrow_right.svg"} />
      </div>
    </div>
  );
};

export default Slide;
