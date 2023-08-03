import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Feed() {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('api/v1/posts'); 
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
