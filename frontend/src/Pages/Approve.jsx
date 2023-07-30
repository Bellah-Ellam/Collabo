import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApprovePage = () => {
  const contentToApprove = [
    {
      title: 'New Article',
      image: 'path-to-image-4.jpg',
      description: 'This is a new article awaiting approval for the home page.'
    },
    {
      title: 'Product Announcement',
      image: 'path-to-image-5.jpg',
      description: 'An exciting new product is ready to be announced on the home page.'
    },
    {
      title: 'Event Invitation',
      image: 'path-to-image-6.jpg',
      description: 'Invitation for an upcoming event that needs approval.'
    },
    {
      title: 'Event Invitation',
      image: 'path-to-image-6.jpg',
      description: 'Invitation for an upcoming event that needs approval.'
    },
    {
      title: 'Event Invitation',
      image: 'path-to-image-6.jpg',
      description: 'Invitation for an upcoming event that needs approval.'
    }, {
      title: 'Event Invitation',
      image: 'path-to-image-6.jpg',
      description: 'Invitation for an upcoming event that needs approval.'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {contentToApprove.map((content, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card>
              <Card.Img variant="top" src={content.image} />
              <Card.Body>
                <Card.Title>{content.title}</Card.Title>
                <Card.Text>{content.description}</Card.Text>
                <Button variant="success">Approve</Button>
                <Button variant="secondary" className="ms-2">Reject</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovePage;




