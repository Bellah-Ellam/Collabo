import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  const { token, currentUser } = useContext(AuthContext);
  const [shareText, setShareText] = useState("");
  const [photoVideo, setPhotoVideo] = useState("");
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const [feelings, setFeelings] = useState("");

  const handleShare = async () => {
    try {
      const response = await fetch("/api/v1/shares", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          share_text: shareText,
          photo_video: photoVideo,
          tag: tag,
          location: location,
          feelings: feelings,
        }),
      });

      if (response.ok) {
        // Share was successful
        console.log("Content shared successfully!");
      } else {
        // Handle error in sharing content
        const errorData = await response.json();
        console.error("Error sharing content:", errorData.error);
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  const handlePhotoVideoChange = (e) => {
    setPhotoVideo(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFeelingsChange = (e) => {
    setFeelings(e.target.value);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={currentUser.profilePicture}
            alt=""
          />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
            value={shareText}
            onChange={(e) => setShareText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="text"
                placeholder="Enter photo or video URL"
                value={photoVideo}
                onChange={handlePhotoVideoChange}
                className="shareInput"
              />
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
              <input
                type="text"
                placeholder="Enter tag"
                value={tag}
                onChange={handleTagChange}
                className="shareInput"
              />
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
                className="shareInput"
              />
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
              <input
                type="text"
                placeholder="Enter feelings"
                value={feelings}
                onChange={handleFeelingsChange}
                className="shareInput"
              />
            </div>
          </div>
          <button className="shareButton" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
