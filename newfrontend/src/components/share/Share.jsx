import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../Context/AuthContext";
import Swal from 'sweetalert2';

const Share = () => {
  const [file, setFile] = useState("");
  const [shareText, setShareText] = useState("");
  const {currentUser} = useContext(AuthContext);
  const handleFileChange = (event) => {
    const selectedFile = event.target.value;
    setFile(selectedFile);
  };

  //upload file
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('desc', shareText);
    try {
      const response = await axios.post('/api/v1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem('authToken'),
        },
      });
      console.log('authToken', localStorage.getItem('authToken'));
      const imageUrl = response.data.url;
      console.log('Uploaded file URL:', imageUrl);
  
      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Post Shared!',
        text: 'Your post has been shared successfully.',
      });
  
      // Reset the file state after successful upload
      setFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      // Show SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while sharing the post.',
      });
    }
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
            placeholder= {`What's on your mind ${currentUser.username} ?`}
            className="shareInput"
            value={shareText}
            onChange={(e) => setShareText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon"
                // onClick={() => setPhotoVideo("PHOTO")}
              />
              <input type="text" accept="image/*,video/*" onChange={(e) => setFile(e.target.value)} />
              <span className="shareOptionText">Photo</span>
            </div>
            {/* <div className="shareOption">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon"
                // onClick={() => setPhotoVideo("VIDEO")}
              />
              <input type="text" accept="image/*,video/*" onChange={handleFileChange} />
              <span className="shareOptionText">Video</span>
            </div> */}
            <div className="shareOption">
              <Label
                htmlColor="blue"
                className="shareIcon"
                // onClick={() => setTag("TAG")}
              />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room
                htmlColor="green"
                className="shareIcon"
                // onClick={() => setLocation("LOCATION")}
              />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareIcon"
                // onClick={() => setFeelings("FEELINGS")}
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleUpload}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
export default Share;