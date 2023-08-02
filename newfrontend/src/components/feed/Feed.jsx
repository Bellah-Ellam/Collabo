import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Feed() {
  const { user } = useContext(AuthContext);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('api/v1/contents'); 
        const data = await response.json();
        setContents(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {contents.map((content) => (
          <Post key={content.id} post={content} />
        ))}
      </div>
    </div>
  );
}
