import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  const { token } = useContext(AuthContext);
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

      if (response) {
        // Share was successful
        console.log(response)
        console.log("Content shared successfully!");

      } else {
        // Handle error in sharing content
        const errorData = await response.json();
        console.error("Not able to share content:", errorData.error);
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}