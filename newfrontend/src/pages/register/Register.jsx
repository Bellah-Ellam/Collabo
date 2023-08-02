import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
  const handleClick = (e) => {
    // console.log(username + '  ' + password);
    // register(name, username, email, photo, doB, password, password_confirmation);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Collabo</h3>
          <span className="loginDesc">
          Connect with friends and the world around you on Collabo.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="my-5">
                Already have an account?{" "}
                <Link style={{ color: "#187BCD" }} to="/login">
                  {" "}
                 Login
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}