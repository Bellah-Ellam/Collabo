import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";


export default function Profile() {
  const [user, setUser] = useState({});
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const [selectedCoverPicture, setSelectedCoverPicture] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const username = useParams().username;
  const coverPictureInputRef = useRef(null);
  const profilePictureInputRef = useRef(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/v1/users/${user.id}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Error fetching user:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [username]);

  // Handler for selecting profile picture
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setSelectedProfilePicture(file);
  };

  // Handler for selecting cover picture
  const handleCoverPictureChange = (event) => {
    const file = event.target.files[0];
    setSelectedCoverPicture(file);
  };

  // Function to update profile picture and cover photo
  const updateProfile = async () => {
    const formData = new FormData();
    if (selectedProfilePicture) {
      formData.append("profilePicture", selectedProfilePicture);
    }
    if (selectedCoverPicture) {
      formData.append("coverPicture", selectedCoverPicture);
    }

    try {
      const response = await fetch("/api/v1/update-profile", {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });

      if (response.ok) {
        // Handle success, maybe update the UI or show a success message
        console.log("Profile updated successfully");
      } else {
        console.error("Error updating profile:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

   // Function to open the file input when clicking "Update Photo" button
   const handleUpdatePhotoClick = (inputRef) => {
    inputRef.current.click();
  };

  return (
    <>
       <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <div className="imageContainer">
                <label htmlFor="coverPicture">
                  <img
                    className="profileCoverImg"
                    src={currentUser && currentUser.coverPicture}
                    alt=""
                    onMouseEnter={() => handleUpdatePhotoClick(coverPictureInputRef)}
                  />
                </label>
                <input
                  type="file"
                  id="coverPicture"
                  ref={coverPictureInputRef}
                  onChange={handleCoverPictureChange}
                  hidden
                />
                <button onClick={updateProfile} className="updatePhotoButton">
                  Update Cover Photo
                </button>
              </div>

              <div className="imageContainer">
                <label htmlFor="profilePicture">
                  <img
                    className="profileUserImg"
                    src={currentUser && currentUser.profilePicture}
                    alt=""
                    onMouseEnter={() => handleUpdatePhotoClick(profilePictureInputRef)}
                  />
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  ref={profilePictureInputRef}
                  onChange={handleProfilePictureChange}
                  hidden
                />
                <button onClick={updateProfile} className="updatePhotoButton">
                  Update Profile Picture
                </button>
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Welcome {currentUser && currentUser.username}</h4>
              <span className="profileInfoDesc">{currentUser && currentUser.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={currentUser} />
          </div>
        </div>
      </div>
    </>
  );
}
