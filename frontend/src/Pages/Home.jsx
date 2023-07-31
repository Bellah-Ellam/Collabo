import React from 'react';
import { Card } from 'react-bootstrap';
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
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Link style={{color: "#FFAE42"}} to="/SingleContent"> Read More</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
