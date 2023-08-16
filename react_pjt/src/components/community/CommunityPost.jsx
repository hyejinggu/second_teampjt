// import styles from "../../css/subpage/community_lounge.module.css";

export default function CommunityPost({ loungePostArray }) {
  const date = new Date();
  return (
    <tbody>
      {loungePostArray.map((post, index) => (
        <tr>
          <td>{loungePostArray.length - index}</td>
          <td>
            <img src={post.image} />
          </td>
          <td>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </td>
          <td>{post.userid}</td>
          <td>{post.date}</td>
          <td>{post.recommended}</td>
          <td>{post.views}</td>
        </tr>
      ))}
    </tbody>
  );
}
