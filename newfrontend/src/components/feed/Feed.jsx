import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
// import { Share } from "@material-ui/icons";

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
  console.log(posts)
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
          {/* You can also add a link to the login page here if you want */}
        </div>
      )}
    </div>
  );
}
