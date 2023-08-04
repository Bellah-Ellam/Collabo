import "./login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I love this');
    login(email, password);
  };

  return (
    // <div className="login">
    //   <div className="loginWrapper">
    //     <div className="loginLeft">
    //       <h3 className="loginLogo">Lamasocial</h3>
    //       <span className="loginDesc">
    //         Connect with friends and the world around you on Lamasocial.
    //       </span>
    //     </div>
    //     <div className="loginRight">
    //       <div className="loginBox">
    //         <input placeholder="Email" className="loginInput" />
    //         <input placeholder="Password" className="loginInput" />
    //         <button className="loginButton" onClick={handleClick}>Log In</button>
    //         <span className="loginForgot">Forgot Password?</span>
    //         <Link to="/register" className="loginRegisterButton" >
    //           Create a New Account
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='d-flex align-items-center justify-content-center min-vh-70'>
      <div className='bg-gray-900 rounded-lg p-5 shadow'>
        <h2 className='my-3'>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            className='form-control rounded mt-2 px-3 py-1'
            placeholder='Enter Email'
          />
          <br />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            className='form-control rounded mt-2 px-3 py-1'
            placeholder='Enter Password'
          />
          <br />

          <button
            type="submit"
            className="btn btn-block text-white"
            style={{ backgroundColor: 'black', borderColor: 'black' }}
          >
            Login
          </button>

          <div className="my-5">
            Not yet Registered?{' '}
            <Link className="ml-4" style={{color: "#FFAE42"}} to="/register"> Register</Link>
          </div>

        </form>
      </div>
    </div>
  );
}