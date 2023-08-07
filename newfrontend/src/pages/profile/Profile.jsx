import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export default function Profile() {
  const [user, setUser] = useState({});
  const id = useParams().id;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/v1/users/${id}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          // Handle error when response is not ok (e.g., 404)
          console.error("Error fetching user:", response.status, response.statusText);
        }
      } catch (error) {
        // Handle network or fetch error
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);
  console.log("user", user)
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={currentUser && currentUser.coverPicture}
                alt=""
              />
              <img
                className="profileUserImg"
                src={currentUser && currentUser.profile_picture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Welcome {currentUser && currentUser.username}</h4>
              <span className="profileInfoDesc">{currentUser && currentUser.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
<<<<<<< HEAD
            <Feed username={user.username} />
            {/* <Rightbar user={user} /> */}
=======
            <Feed username={username} />
            <Rightbar user={currentUser} />
>>>>>>> 72ad327c198c65e6a360d68551c92ab2808d6a3e
          </div>
        </div>
      </div>
    </>
  );
}
