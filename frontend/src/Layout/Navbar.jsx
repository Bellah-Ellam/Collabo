import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import Notifications from '../Pages/Notifications';


export default function Navbar() 
{
    const {currentUser, logout} = useContext(AuthContext)  
    console.log("user from navbar,")

    return (
        <div>
        <nav className="navbar navbar-expand-lg mt-1" style={{backgroundColor: "#FFAE42"}}>
        <div className="container">

        {/* Logo */}
            <Link to="/" className="navbar-brand">
            <img
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="Socialpilot"
              style={{ width: '250px', height: '100px', objectFit: 'contain' }}
            />
            </Link>
            <div className="navbar-brand fw-bolder text-white">SocialPilot</div>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> */}
        
        {/* <div>                            
            <input type="text" placeholder="Search.."/>
        </div> */}

        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link to="/Home" className="nav-link active text-white" aria-current="page" >Feed</Link>
            </li>

            {/* {currentUser && currentUser.email?(
              <> */}

            <li className="nav-item">
                <Link to="/Approve" className="nav-link active text-white">Approve</Link>
            </li>

            <li className="nav-item">
                <Link to="/Upload" className="nav-link active text-white">Upload</Link>
            </li>
            
            <li className="nav-item dropdown">
                 <Link to="/Profile" className="nav-link active dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>          
                <ul className="dropdown-menu text-black">
                    <li><Link to="/Profile" className="dropdown-item" href="#">Your Profile</Link></li>
                    <li><a className="dropdown-item" href='#' onClick={() => logout()}>Logout</a></li>
                </ul>
            </li>

            {/* </>) */}

            {/* :

            <> */}
       
            <div className="notifications-icon">
            <li className="nav-item">
                <Link to="/Notification" className="nav-link active text-white" >
                    <Notifications/>
                    <img src="./notification.png" alt="Notifications"
                     style={{ height: '24px', width: '24px', cursor: 'pointer' }} />
                    <span className="badge bg-danger">2</span>
                </Link>
            </li>
            </div>

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