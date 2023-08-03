import "./login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="loginInput"
                placeholder="Enter Email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="loginInput"
                placeholder="Enter Password"
              />
              <button
                type="submit"
                className="loginButton"
                style={{ borderColor: "black" }}
              >
                Login
              </button>
              <div className="my-5">
                Not yet Registered?{" "}
                <Link style={{ color: "#187BCD" }} to="/register">
                  {" "}
                  Register
                </Link>
              </div>
            </form>
            </div>
          </div>
    </div>
  );
}
