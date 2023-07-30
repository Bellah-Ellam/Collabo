// import React, { useContext } from 'react'
// import { AuthContext } from '../Context/AuthContext'

// export default function Profile() {

//   const {currentUser} = useContext(AuthContext)  
//   return (
//     <div>
//       {
//         currentUser && currentUser?
//         <>
//         <>
//         <a href='current user profile pic'/>
//         </>
//           <h4>Email: {currentUser && currentUser.email}</h4>
//           <h4>Created-at: {currentUser && currentUser.created_at}</h4>
//           <h4>Updated-at: {currentUser && currentUser.updated_at}</h4>
//         </>
//         :
//         <div className='text-info'>
//             Login to view your profile details
//         </div>
//       }
//     </div>
//   )
// }

import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={6} lg={4} className="text-center">
            <img
              src={currentUser.profileImageUrl}
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ maxWidth: '150px' }}
            />
            <h3 className="mt-3">{currentUser.displayName}</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>Profile Details</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {currentUser.email}
                  <br />
                  <strong>Location:</strong> {currentUser.location}
                  {/* Add more user details here */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
