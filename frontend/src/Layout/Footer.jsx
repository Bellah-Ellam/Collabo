// import React from 'react';
// import Card from 'react-bootstrap/Card';

// function Footer() {
//   return (
//     <div className="wrapper" style={{ minHeight: '10vh', display: 'flex', flexDirection: 'column' }}>

//       <footer className="footer mt-auto py-0 bg-success text-center text-white">
//       <Card className="text-center">
//         <Card.Body>
//           <Card.Title>All Rights Reserved</Card.Title>
//           <h5>© 2023.</h5>
//         </Card.Body>
//       </Card>

//       </footer>

//     </div>
//   );
// }

// export default Footer;

import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    // <div className="wrapper" style={{ minHeight: '5vh', display: 'flex', flexDirection: 'column' }}>
    //   <footer className="footer mt-auto py-2 bg-secondary text-white">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col text-center">
    //           <Card className="border-0 bg-secondary text-white">
    //             <Card.Body>
    //               <Card.Title>All Rights Reserved</Card.Title>
    //               <h5>© 2023.</h5>
    //             </Card.Body>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <footer className="footer bg-dark text-white text-center py-3">
    <div className="container">
      <p>&copy; 2023 Collabo Content Manager. All rights reserved.</p>
    </div>
  </footer>
  );
}

export default Footer;


