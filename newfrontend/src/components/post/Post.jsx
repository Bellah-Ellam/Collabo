import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useContext, useEffect } from "react";
import { format } from "timeago.js";
import { AuthContext } from "../../Context/AuthContext";

export default function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

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
        const response = await fetch(`/api/v1/posts/${post?._id}/comments`);
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
      const response = await fetch(`/api/v1/posts${post?._id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`, // If using JWT token for authentication
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
  };

  // Comment post
  const createCommentHandler = async () => {
    if (!currentUser) {
      // User is not logged in, show an alert message
      window.alert("Please log in to comment.");
      return;
    }

    try {
      const response = await fetch(`/api/v1/posts/${post?._id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`, // If using JWT token for authentication
        },
        body: JSON.stringify({ body: commentText }),
      });
      if (response.ok) {
        // Comment was successful, handle accordingly
        setCommentText("");
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setShowCommentInput(false); // Hide the comment input after submitting the comment
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
      const response = await fetch(`/api/v1/posts/${post?._id}/comments${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
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
              src={user.profilePicture}
              alt={user.username}
            />
            <span className="postUsername">{user.username}</span>
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
                onClick={() => setShowCommentInput(true)} // Show the comment input when clicked
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

            {comments.map((comment) => (
              <div
                key={comment.id}
                className="postComment"
                onMouseEnter={() => handleCommentHover(comment.id)}
                onMouseLeave={handleCommentLeave}
              >
                <img
                  className="postCommentProfileImg"
                  src={comment.user.profilePicture}
                  alt={comment.user.username}
                />
                <span className="postCommentUsername">
                  {comment.user.username}
                </span>
                <span className="postCommentDate">
                  {format(comment.createdAt)}
                </span>
                <div className="postCommentText">{comment.body}</div>
                {isHoveredComment === comment.id &&
                  currentUser?.id === comment.user.id && (
                    <div
                      className="postCommentDelete"
                      onClick={() => deleteCommentHandler(comment.id)}
                    >
                      Delete
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
