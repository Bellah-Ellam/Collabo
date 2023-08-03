import React, { useContext, useEffect, useState } from "react";
import SinglePost from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { AuthContext } from "../../Context/AuthContext";

export default function Feed() {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/v1/posts'); // Replace '/api/v1/posts' with the actual API endpoint URL for fetching posts
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
