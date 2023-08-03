import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userContents, setUserContents] = useState([]);

  useEffect(() => {
    // Fetch user profile data from the backend
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      // Fetch user data
      const userResponse = await fetch("/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setProfilePicture(userData.profilePicture);
        setCoverPicture(userData.coverPicture);
        setBio(userData.bio);
        setFollowers(userData.followers);
        setFollowing(userData.following);
      } else {
        console.error("Error fetching user data:", userResponse.status, userResponse.statusText);
      }

      // Fetch user's contents
      const contentsResponse = await fetch(`/api/v1/contents?userId=${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (contentsResponse.ok) {
        const contentsData = await contentsResponse.json();
        setUserContents(contentsData);
      } else {
        console.error("Error fetching user contents:", contentsResponse.status, contentsResponse.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const handleProfilePictureChange = (e) => {
    // Update the profile picture state here
  };

  const handleCoverPictureChange = (e) => {
    // Update the cover picture state here
  };

  const handleBioChange = (e) => {
    // Update the bio state here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the updated profile data to the backend
      const response = await fetch("/api/v1/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          profilePicture,
          coverPicture,
          bio,
        }),
      });
      if (response.ok) {
        console.log("Profile updated successfully");
      } else {
        console.error("Error updating profile:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      {/* Profile Picture */}
      <img src={profilePicture} alt="Profile Picture" />

      {/* Cover Picture */}
      <img src={coverPicture} alt="Cover Picture" />

      {/* Bio */}
      <textarea value={bio} onChange={handleBioChange} />

      {/* Update Profile Picture, Cover Picture, and Bio */}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleProfilePictureChange} />
        <input type="file" onChange={handleCoverPictureChange} />
        <button type="submit">Update Profile</button>
      </form>

      {/* Followers */}
      <div>
        <h2>Followers</h2>
        {followers.map((follower) => (
          <div key={follower.id}>
            <span>{follower.username}</span>
          </div>
        ))}
      </div>

      {/* Following */}
      <div>
        <h2>Following</h2>
        {following.map((follow) => (
          <div key={follow.id}>
            <span>{follow.username}</span>
          </div>
        ))}
      </div>

      {/* User Contents */}
      <div>
        <h2>Contents</h2>
        {userContents.map((content) => (
          <div key={content.id}>
            <h3>{content.title}</h3>
            <p>{content.body}</p>
            <div>
              Likes: {content.likes_count}
            </div>
            <div>
              Comments: {content.comments.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
