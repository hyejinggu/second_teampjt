import "../../css/subpage/community_lounge.css";

export default function CommunityPost({ loungePostArray }) {
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
          <td>{post.userid}</td>
          <td>{post.date}</td>
          <td>{post.recommended}</td>
          <td>{post.views}</td>
        </tr>
      ))}
    </tbody>
  );
}
