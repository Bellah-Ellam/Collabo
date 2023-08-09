import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(post.likes ? post.likes.length : 0); // Set initial like count based on the number of likes
  const [isLiked, setIsLiked] = useState(post.likes && currentUser ? post.likes.includes(currentUser.id) : false);
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

  useEffect(() => {
    // Fetch post likes when the component mounts
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const response = await fetch(`/api/v1/posts/${post.id}/likes`);
      const likesData = await response.json();
      setLike(likesData.likesCount || 0);
      setIsLiked(likesData.isLiked || false);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  //create notification
  const createNotification = async (action_type, target_user_id, content, read) => {
    try {
      const response = await fetch('/api/v1/notifications/create_notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('authToken'),
        },
        body: JSON.stringify({
          action_type, // 'like' or 'comment'
          target_user_id,
          content,
          read

          // You might need additional data like sender, receiver, etc.
        }),
      });
      if (response.ok) {
        console.log('Notification created successfully.');
      } else {
        console.error('Error creating notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };
  const likeHandler = async () => {
    try {
      const response = await fetch(`/api/v1/posts/${post.id}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${post.user.token}`,
          Authorization: localStorage.getItem("authToken")
        },
        body: JSON.stringify({ userId: currentUser?.id }),
      });
      if (response.ok) {
        // Like was successful, handle accordingly
        const updatedLikeCount = isLiked ? like - 1 : like + 1;
        setLike(updatedLikeCount);
        setIsLiked(!isLiked);

        // Call the createNotification function for like
      await createNotification('like', post.user.id, `${currentUser.username} liked your post.`, false);

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
   
    try {
      const response = await fetch(`/api/v1/posts/${post.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${currentUser.token}`,
           // If using JWT token for authentication
           Authorization: localStorage.getItem("authToken")
        },
        body: JSON.stringify({ body: commentText }),
      });
      if (response.ok) {
        // Comment was successful, handle accordingly
        setCommentText("");
        const newComment = await response.json();
        setComments([...comments, newComment]);

         // Call the createNotification function for comment
      await createNotification('comment', post.user.id, `${currentUser.username} commented on your post.`, false);

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
          Authorization: localStorage.getItem("authToken"),
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

  //handle post delete
  const handlePostDelete = async () => {
    try {
      const response = await fetch(`/api/v1/posts/${post.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authToken"),
        },
      });
      if (response.ok) {
        // Post deletion was successful, navigate to home or do any other action
        // For example, if using React Router, you can navigate to the home page
        // using the useNavigate hook:
        // const navigate = useNavigate();
        // navigate("/");
        // Or, you can reload the page to update the UI and remove the deleted post:
        window.location.reload();
      } else {
        // Handle error in deleting the post
        console.error("Error deleting post:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  
  //show delete btn
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const handleDeleteButtonClick = () => {
    setShowDeleteButton(!showDeleteButton);
  };
  

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
           
              <img
                className="postProfileImg"
                src={post.user && post.user.profile_picture}
                alt={post.user && post.user.username}
              />
           

            <span className="postUsername">{post.user && post.user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
             <MoreVert onClick={handleDeleteButtonClick} />
             {showDeleteButton && (
             <button className="deletePostButton" onClick={handlePostDelete}>
              Delete Post
             </button>
              )}
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
                  post.user.id === comment.user_id && (
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
