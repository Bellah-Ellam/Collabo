import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar(user) {
  const { currentUser, logout, token } = useContext(AuthContext);
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] =useState("");
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

  // //handle search
  // const handleSearchSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(`/api/v1/search?query=${searchQuery}`);
  //     if (!response.ok) {
  //       throw new Error("Search request failed");
  //     }
  //     const searchData = await response.json();
  //     console.log(searchData); // This will be the search results from the backend
  //    setSearchResults(searchData);
  //     // where setSearchResults is a state setter to update the state with search results.
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">COLLABO</span>
      </div>
      <div className="topbarCenter">
        <form className="searchbar" >
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink bg-white text-dark">Home</Link>
          {!currentUser && (
            <>
              <Link to="/login" className="topbarLink">Login</Link>
              <Link to="/register" className="topbarLink">Register</Link>
            </>
          )}
        </div>
        {currentUser && (
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Notifications /> {notificationsCount > 0 && <span className="topbarIconBadge">{notificationsCount}</span>}
            </div>
            <div className="topbarIconItem" onClick={handleProfileClick}>
              <img src={currentUser.profilePicture} alt="" className="topbarImg" />

              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item text-white"
                      onClick={handleProfileOptionClick}
                    >
                      Profile : {' '}
                      {currentUser && currentUser.email}
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
        )}
      </div>
    </div>
  );
}
