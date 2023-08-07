import "./Register.css";

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
          Manage your content in a seamless and efficient manner.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" onClick={handleClick}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}