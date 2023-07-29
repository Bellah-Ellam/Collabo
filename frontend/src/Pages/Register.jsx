import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function Register() {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');  
  const [photo, setPhoto] = useState(null);
  const [doB, setDoB] = useState(null);
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + '  ' + password);
    register(username, name, photo, doB, role, password, password_confirmation);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-45 bg-white p-5 shadow-sm">
        <h1 className="font-semibold text-2xl my-6">Register</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Create Username
          </label>
          <input
            type="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Your Name
          </label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Your Photo
          </label>
          <input
            type="photo"
            id="photo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="photo"
            required
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Your Photo
          </label>
          <input
            type="file" /* Use "file" input type for images */
            id="photo"
            onChange={handleFileChange}
            className="form-control"
            accept="image/*" /* Specify accepted file types (images in this case) */
            required
          />
       </div>

       <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Date of Birth
          </label>
          <input
            type="doB"
            id="doB"
            value={doB}
            onChange={(e) => setDoB(e.target.value)}
            className="form-control"
            placeholder="DoB"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label font-weight-bold">
            Your Role
          </label>
          <input
            type="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control"
            placeholder="Role"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label font-weight-bold">
            Your Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label font-weight-bold">
            Password Confirmation
          </label>
          <input
            type="password"
            id="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block text-white"
          style={{ backgroundColor: 'green' }}
        >
          Sign up
        </button>

        <div className="my-5">
          Already Registered?{' '}
          <Link className="ml-4" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}


