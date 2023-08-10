import "../../css/subpage/community_lounge.css";

export default function CommunityPost({ loungePostArray }) {
  const loungePostArray = [
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/405-20230618_200323.jpg",
      title: "집 앞 공원으로 산책 다녀왔어요.",
      content:
        "발톱이 살짝들려서 발에 붕대하고 있는데 집에만 있음 넘 답답해할까봐 살짝 나와서 산책해줬어요❣️ 잠깐 나와도 이렇게나 좋은지.. 발 다나으면 산책 원없이 해줄꼬에요😆",
      date: new Date().toLocaleDateString(),
      recommended: 20,
      views: 50,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/555-image_picker8501982540016886358.jpg",
      title: "병원 진료도 잘받아요🤣",
      content:
        "병원에서 얌전하게 진료도 잘 받는다고 칭찬 받았어요😆 근데 내가 하면 승질 엄청내던데..",
      date: new Date().toLocaleDateString(),
      recommended: 13,
      views: 70,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/758-image_picker3081517976164242868.jpg",
      title: "가슴으로 낳아 돈으로 키운다",
      content: "🐶🐶너무맞는말이쟎아요🤍 건강만해다오. 댕댕이들아",
      date: new Date().toLocaleDateString(),
      recommended: 34,
      views: 101,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/828-image_picker_8C352A29-9E68-485B-93A4-FEB70D5A6C2D-5498-000007EF9298DA7B.jpg",
      title: "몇 살 같아 보이나요?! ㅎㅎ",
      content:
        "2011년 1월생이에요 무려 12살! 최강 동안...이지 않나요?!ㅎㅎㅎㅎ",
      date: new Date().toLocaleDateString(),
      recommended: 8,
      views: 26,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/273-KakaoTalk_20230617_061331272_01.jpg",
      title: "이 생명체는 누구일까요!",
      content:
        "뭣좀하려고 컴퓨터앞에 앉아있음 꼭 밑에서 등돌리고 저러고 누워있는데 뒷모습 털쪘다요❤️ 너구린가 댕댕인가 착각들 정도",
      date: new Date().toLocaleDateString(),
      recommended: 21,
      views: 65,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/535-20230528_165840.jpg",
      title: "대형견 산책시 뛰고 또 뛰고~~",
      content:
        "풍산개 수컷입니다. 아침 산책시간만 되면 흥분지수가 업입니다. 견사 문 열자마자(지가 열려고 난리 치죠)",
      date: new Date().toLocaleDateString(),
      recommended: 23,
      views: 57,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/943-image_picker4043895192963572728.jpg",
      title: "간식ㅎㅎ",
      content: "간식먹고싶어서낼름ㅎ",
      date: new Date().toLocaleDateString(),
      recommended: 19,
      views: 42,
    },
    {
      image:
        "https://bff-images.bemypet.kr/media/medias/all/749-image_picker_E73C8D6C-5E69-4E01-A994-AE950E6A4CB8-81072-00001075AD518031.jpg",
      title: "강아지 썬캡 샀어용",
      content:
        "검진 했더니 예방차 자외선 차단 해주라구 해서 썬캡 샀는데 넘 귀여워용~~^^",
      date: new Date().toLocaleDateString(),
      recommended: 33,
      views: 87,
    },
  ];

  return (
    <tbody>
      {loungePostArray.map((post, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>
            <img src={post.image} />
          </td>
          <td>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </td>
          <td>{post.date}</td>
          <td>{post.recommended}</td>
          <td>{post.views}</td>
        </tr>
      ))}
    </tbody>
  );
}
