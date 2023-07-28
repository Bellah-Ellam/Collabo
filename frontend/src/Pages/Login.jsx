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
        <h1 className='my-3'>Login</h1>
        
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
          <div className='d-flex justify-content-center'>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block text-white"
            style={{ backgroundColor: 'green' }}
          >
            Login
          </button>
          </div>

            <div className="my-5">
            Not yet Registered?{' '}
            <Link className="ml-4" to="/register">
              Register
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;



