import "./register.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
export default function Register() {
  const { register } = useContext(AuthContext);

  // State variables for the form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [date_of_birth, setDateofBirth] = useState(""); // Date of Birth state
  const [profile_picture, setProfilePicture] = useState(null); // Profile Picture state
// Bella comment

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the register function from the AuthContext
    register(username, email, password, password_confirmation, profile_picture, date_of_birth);
  };

  // const handleProfilePictureChange = (e) => {
  //   // Set the profilePicture state to the selected file
  //   setProfilePicture(e.target.files[0]);
  // };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Collabo</h3>
          <span className="loginDesc">Connect with friends and the world around you on Collabo.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="signupInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="signupInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="signupInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password Again"
                className="signupInput"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <input
                type="date"
                className="signupInput"
                value={date_of_birth}
                onChange={(e) => setDateofBirth(e.target.value)}
              />
              <input
                type="text"
                className="signupInput"
                placeholder="profilePicture"
                onChange={(e) => setProfilePicture(e.target.value)}
              />
              <button type="submit" className="loginButton">
                Sign Up
              </button>
            </form>
            <div className="my-5">
              Already have an account?{" "}
              <Link style={{ color: "#187BCD" }} to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}