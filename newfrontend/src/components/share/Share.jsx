// import "./share.css";
// import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
// import { useState,useContext } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import Swal from "sweetalert2"


// export default function Share() {
//   const {currentUser} = useContext(AuthContext);
//   const { token } = useContext(AuthContext);
//   const [shareText, setShareText] = useState("");
//   const [photoVideo, setPhotoVideo] = useState("");
//   const [tag, setTag] = useState("");
//   const [location, setLocation] = useState("");
//   const [feelings, setFeelings] = useState("");

//   const handleShare = async () => {
//     try {
//        const response = await fetch("/api/v1/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Authorization: `Bearer ${token}`,
//           Authorization: localStorage.getItem("authToken"),
//         },
//         body: JSON.stringify({
//           desc: shareText,
//           img: photoVideo,
//           tag: tag,
//           location: location,
//           feelings: feelings
//         }),
//       });
    
      
//         if (response.ok) {
//           console.log(response)
//         // Share was successful
//         console.log("Content shared successfully!");
//         Swal.fire("Content shared successfully!", response.success, "success");

//       } else {
//         // Handle error in sharing content
//         const errorData = await response.json();
//         console.error("Error sharing content:", errorData.error);
//       }
      
//     }
//     catch (error) {
//       console.error("Error sharing content:", error);
  
//     }
    
      
    
//   };

//   return (
//     <div className="share">
//       <div className="shareWrapper">
//         <div className="shareTop">
//           <img
//             className="shareProfileImg"
//             src="/assets/person/1.jpeg"
//             alt=""
//           />
//           <input
//             placeholder= {`What's on your mind ${currentUser.username} ?`}
//             className="shareInput"
//             value={shareText}
//             onChange={(e) => setShareText(e.target.value)}
//           />
//         </div>
//         <hr className="shareHr" />
//         <div className="shareBottom">
//           <div className="shareOptions">
//             <div className="shareOption">
//               <PermMedia
//                 htmlColor="tomato"
//                 className="shareIcon"
//                 onClick={() => setPhotoVideo("PHOTO")}
//               />
//               <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//               <span className="shareOptionText">Photo</span>
//             </div>
//             <div className="shareOption">
//               <PermMedia
//                 htmlColor="tomato"
//                 className="shareIcon"
//                 onClick={() => setPhotoVideo("VIDEO")}
//               />
//               <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//               <span className="shareOptionText">Video</span>
//             </div>
//             <div className="shareOption">
//               <Label
//                 htmlColor="blue"
//                 className="shareIcon"
//                 onClick={() => setTag("TAG")}
//               />
//               <span className="shareOptionText">Tag</span>
//             </div>
//             <div className="shareOption">
//               <Room
//                 htmlColor="green"
//                 className="shareIcon"
//                 onClick={() => setLocation("LOCATION")}
//               />
//               <span className="shareOptionText">Location</span>
//             </div>
//             <div className="shareOption">
//               <EmojiEmotions
//                 htmlColor="goldenrod"
//                 className="shareIcon"
//                 onClick={() => setFeelings("FEELINGS")}
//               />
//               <span className="shareOptionText">Feelings</span>
//             </div>
//           </div>
//           <button className="shareButton" onClick={handleShare}>
//             Share
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../Context/AuthContext";


const Share = () => {
  const [file, setFile] = useState("");
  const [shareText, setShareText] = useState("");
  const {currentUser} = useContext(AuthContext);

  const handleFileChange = (event) => {
    const selectedFile = event.target.value;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    // if (!file) {
    //   alert('Please select a file to upload.');
    //   return;
    // }

    // Perform the file upload to the backend here
    // Call an API endpoint to upload the file and get the URL

    // Reset the file state after successful upload

    const formData = new FormData();
    formData.append('file', file);
    formData.append('desc', shareText);

    try {
    const response = await axios.post('api/v1/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem("authToken")
      },
    });
    console.log("authToken", localStorage.getItem("authToken"))
    const imageUrl = response.data.url;
    console.log('Uploaded file URL:', imageUrl);

    // Reset the file state after successful upload
    setFile(null);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
    // try {
    //   await axios.post("/api/v1/posts", formData);
    //   window.location.reload();
    // } catch (err) {}

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
            <div className="shareOption">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon"
                // onClick={() => setPhotoVideo("VIDEO")}
              />
              <input type="text" accept="image/*,video/*" onChange={handleFileChange} />
              <span className="shareOptionText">Video</span>
            </div>
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

