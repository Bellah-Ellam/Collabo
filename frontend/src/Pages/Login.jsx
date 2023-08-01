import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I love this');
    login(username, password);
  };

  return (
    <div className='d-flex align-items-center justify-content-center min-vh-70'>
      <div className='bg-gray-900 rounded-lg p-5 shadow'>
        <h2 className='my-3'>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            className='form-control rounded mt-2 px-3 py-1'
            placeholder='Enter Username'
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
            <Link className="ml-4" style={{color: "#FFAE42"}} to="/register">
              Register
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;



