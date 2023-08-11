import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Feed() {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(null);

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
  const reversedPosts = posts.slice().reverse();

  return (
    <div className="feed">
      {currentUser && currentUser.email ? (
        <div className="feedWrapper">
          <Share/>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>Please log in to view the feed.</p>
         <img src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Landing image"/>
        </div>
      )}
    </div>
  );
}
