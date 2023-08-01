import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const cardData = [
    {
      title: 'Content Creation',
      image: 'path-to-image-1.jpg',
      description: 'Craft engaging and informative content for your website or blog.'
    },
    {
      title: 'Analytics Insights',
      image: 'path-to-image-2.jpg',
      description: 'Track and analyze your content performance with detailed insights.'
    },
    {
      title: 'Cloud Storage',
      image: 'path-to-image-3.jpg',
      description: 'Securely store and access your content from anywhere with cloud storage.'
    },
    {
      title: 'Cloud Storage',
      image: 'path-to-image-3.jpg',
      description: 'Securely store and access your content from anywhere with cloud storage.'
    },
    {
      title: 'Cloud Storage',
      image: 'path-to-image-3.jpg',
      description: 'Securely store and access your content from anywhere with cloud storage.'
    },
    {
      title: 'Cloud Storage',
      image: 'path-to-image-3.jpg',
      description: 'Securely store and access your content from anywhere with cloud storage.'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                {/* Add like and comment buttons */}
                <div className="d-flex justify-content-between">
                  <Button variant="primary" className="me-2">Like</Button>
                  <Button variant="secondary" className="me-2">Comment</Button>
                </div>
              </Card.Body>
              {/* Add post timestamp */}
              <Card.Footer>
                <small className="text-muted">Posted 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
