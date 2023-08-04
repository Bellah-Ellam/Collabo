import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar() {
  const { currentUser, logout, token } = useContext(AuthContext);
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fetch notifications for the current user
  const fetchNotifications = async () => {
    // ...
  };

  // Handle click on the profile image
  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle click on the "Profile" option in the dropdown
  const handleProfileOptionClick = () => {
    navigate("/profile");
    setDropdownVisible(false);
  };

  // Handle click on the "Logout" option in the dropdown
  const handleLogoutOptionClick = () => {
    logout();
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
          {currentUser ? (
            <>
              <Link to="/" className="topbarLink text-dark">
                Home
              </Link>
              <Link to="/profile" className="topbarLink text-dark">
                Profile
              </Link>
              <button
                className="topbarLink text-dark"
                onClick={handleLogoutOptionClick}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="topbarLink text-dark">
                Home
              </Link>
              <Link to="/login" className="topbarLink">
                Login
              </Link>
              <Link to="/register" className="topbarLink">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />{" "}
            {notificationsCount > 0 && (
              <span className="topbarIconBadge">{notificationsCount}</span>
            )}
          </div>
          <div className="topbarIconItem" onClick={handleProfileClick}>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />

            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item text-white"
                    onClick={handleProfileOptionClick}
                  >
                    Profile {currentUser && currentUser.email}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-white"
                    onClick={handleLogoutOptionClick}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}