import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div className="wrapper" style={{ minHeight: '10vh', display: 'flex', flexDirection: 'column' }}>

      <footer className="footer mt-auto py-0 bg-success text-center text-white">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>All Rights Reserved</Card.Title>
          <h5>© 2023.</h5>
        </Card.Body>
      </Card>

      </footer>

    </div>
  );
}

export default Footer;
