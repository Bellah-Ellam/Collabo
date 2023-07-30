import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export default function Navbar() 
{
    const {currentUser, logout} = useContext(AuthContext)  
    console.log("user from navbar,");

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-success mt-3">
        <div className="container">

{/* Logo */}
            <Link to="/" className="navbar-brand fw-bolder text-white">
            <img
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="Socialpilot"
              style={{ width: '150px', height: '50px', objectFit: 'contain' }}
            />
            </Link>
          <div className="navbar-brand fw-bolder text-white">SocialPilot</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        
        {/* <div>                            
            <input type="text" placeholder="Search.."/>
        </div> */}

        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link to="/Home" className="nav-link active text-white" aria-current="page" >Home</Link>
            </li>

            {/* {currentUser && currentUser.email?(
              <> */}

            <li className="nav-item">
                <Link to="/Approve" className="nav-link active text-white">Approve</Link>
            </li>

            <li className="nav-item">
                <Link to="/Upload" className="nav-link active text-white">Upload</Link>
            </li>
    
            <li className="nav-item">
                <Link to="/Notification" className="nav-link active text-white" >Notification</Link>
            </li>

            <li className="nav-item dropdown">
                 <Link to="/Profile" className="nav-link active dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>          
                <ul className="dropdown-menu bg-success">
                    <li><Link to="/Profile" className="dropdown-item text-white" href="#">Profile Image</Link></li>
                    <li><a className="dropdown-item text-white" href='#' onClick={() => logout()}>logout</a></li>
                </ul>
            </li>

            {/* </>) */}

            {/* :

            <> */}

            <li className="nav-item">
            <Link to="/Login" className="nav-link active text-white" >Login</Link>
            </li>

            <li className="nav-item">
            <Link to="/register" className='nav-link active text-white'>Register</Link>
            </li>

            {/* </>

            } */}

        </ul>
        </div>
        
        </div>
        </nav>
        </div>

    )
}