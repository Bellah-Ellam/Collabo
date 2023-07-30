// import React from 'react';
// import { useEffect, useState } from 'react';
// import Card from './Card';

// export default function Home() {


//   // Fetch the list of approved content


//   return (

//     <div className="card mt-3 mb-4 d-flex flex-column align-items">
//       <img src="/" alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", maxHeight: "200px" }} />
//       <div className="card-body d-flex flex-column">
//         <h4 className="card-title">Dennis</h4>
//         <p className="card-text">Dennis</p>
//         <p className="card-text">Posted by: Dennis</p>
//         <p className="card-text">Bookings: Dennis</p>
//         <div className="mt-auto d-flex justify-content-between">
//           <button className="btn btn-primary btn-sm" >Book</button>
//           <button className="btn btn-danger btn-sm" >Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Card, Button } from 'react-bootstrap';

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
                <Button variant="secondary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
