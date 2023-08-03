import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useState,useEffect, useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";


export default function Topbar(user) {
  const { currentUser, logout, token } = useContext(AuthContext);
  const [notificationsCount, setNotificationsCount] = useState(0);

  console.log("New Staff", currentUser)

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fetch notifications for the current user
  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/v1/notifications", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the headers
        },
      });
      if (response.ok) {
        const notifications = await response.json();
        // Calculate the count of unread notifications
        const unreadCount = notifications.filter((notification) => !notification.read).length;
        setNotificationsCount(unreadCount);
      } else {
        // Handle error in fetching notifications
        console.error("Error fetching notifications:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">COLLABO</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink">Home </Link> 
          <Link to="/login" className="topbarLink">Login </Link>
          <Link to="/register" className="topbarLink">Register </Link>
          
          
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />  {notificationsCount > 0 && <span className="topbarIconBadge">{notificationsCount}</span>}
          </div>
        </div>


              <li className="nav-item dropdown">
                  {/* <Link to="/profile" className="topbarLink">Profile</Link> */}
                  <Link to="/profile" className="topbarImgLink">
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                  </Link>

                <ul className="dropdown-menu">
                      <li><Link to="/profile" className="dropdown-item text-white" href="#">{currentUser && currentUser.email}</Link></li>
                      <li><a className="dropdown-item text-white" href='#' onClick={() => logout()}>logout</a></li>
                </ul>
              </li>

      </div>
    </div>
  );
}
