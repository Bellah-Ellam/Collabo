import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(post.likes.length); // Set initial like count based on the number of likes
  const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser?.id));
  const [user, setUser] = useState({});
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false); // State to control comment input visibility

  useEffect(() => {
    // Check if post.likes is an array before using includes
    const isPostLiked =
      Array.isArray(post.likes) && post.likes.includes(currentUser?.id);
    setIsLiked(isPostLiked);
  }, [currentUser?.id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/v1/users/${post?.userId}`);
        const userData = await response.json();
        setUser(userData || {});
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [post?.userId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/v1/posts${post.id}/comments`);
        const commentsData = await response.json();
        setComments(commentsData?.length ? commentsData : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [post?._id]);

  const likeHandler = async () => {
    try {
      const response = await fetch(`/api/v1/posts${post.id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser && currentUser.token}`,
        },
        body: JSON.stringify({ userId: currentUser?.id }),
      });
      if (response.ok) {
        // Like was successful, handle accordingly
        const updatedLikeCount = isLiked ? like - 1 : like + 1;
        setLike(updatedLikeCount);
        setIsLiked(!isLiked);
      } else {
        // Handle error in liking content
        console.error(
          "Error liking content:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error liking content:", error);
    }
  }

  // Comment post
  const createCommentHandler = async () => {
    const userToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2OTEzNTgxNDgsImp0aSI6IjQ5Y2JiNjBlLWY3ZDktNDljNy1hODc3LTgyZDkyMjQ5NjM2YSJ9.JXme0hj57jlwX39GLRjIyfanhwGAji7MP3mN4sdv7KU"
    try {
      const response = await fetch(`/api/v1/posts/${post.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`, // If using JWT token for authentication
        },
        body: JSON.stringify({ body: commentText }),
      });
      if (response.ok) {
        // Comment was successful, handle accordingly
        setCommentText("");
        const newComment = await response.json();
        setComments([...comments, newComment]);
      } else {
        // Handle error in creating the comment
        console.error(
          "Error creating comment:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  // Comment delete
  const deleteCommentHandler = async (commentId) => {
    try {
      const response = await fetch(`/api/v1/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser && currentUser.token}`,
        },
      });
      if (response.ok) {
        // Comment deletion was successful, remove the comment from the state
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId)
        );
      } else {
        // Handle error in deleting the comment
        console.error(
          "Error deleting comment:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  // Handle the hover and leave comment
  const [isHoveredComment, setIsHoveredComment] = useState(null);

  const handleCommentHover = (commentId) => {
    setIsHoveredComment(commentId);
  };

  const handleCommentLeave = () => {
    setIsHoveredComment(null);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
           
              <img
                className="postProfileImg"
                src={currentUser && currentUser.profile_picture}
                alt={user.username}
              />
           

            <span className="postUsername">{currentUser && currentUser.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt="Like"
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt="Heart"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comments.length} comments</span>

            {currentUser && !showCommentInput && (
              <button
                className="postCommentButton"
                onClick={() => setShowCommentInput(true)}
              >
                Comment
              </button>
            )}

            {currentUser && showCommentInput && (
              <div className="postCommentForm">
                <div className="postCommentInputWrapper">
                  <textarea
                    className="postCommentInput"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </div>
                <button
                  className="postCommentButton"
                  onClick={createCommentHandler}
                >
                  Comment
                </button>
              </div>
            )}

            {comments && comments.map((comment) => (
              <div
                key={comment.id}
                className="postComment"
                onMouseEnter={() => handleCommentHover(comment.id)}
                onMouseLeave={handleCommentLeave}
              >
                {/* <img
                  className="postCommentProfileImg"
                  src={comment.user.profilePicture}
                  alt={comment.user.username}
                /> */}
                <span className="postCommentUsername">
                  {/* {comment.user.username} */}
                </span>
                <span className="postCommentDate">
                  {format(comment.createdAt)}
                </span>
                <div className="postCommentText">{comment.body}</div>
                {isHoveredComment === comment.id &&
                  currentUser && currentUser.id === comment.user_id && (
                    <div
                      className="postCommentDelete"
                      
                      onClick={() => deleteCommentHandler(comment.id)}
                    >
                       <img
              className="deleteIcon"
              src="assets/delete.png"
              onClick={likeHandler}
              alt="delete"
            />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
