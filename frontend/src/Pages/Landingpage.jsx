
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function LandingPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     customPaging: function (i) {
//       return (
//         <div
//           style={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             background: i === 0 ? 'white' : 'gray',
//           }}
//         />
//       );
//     },
//     dotsClass: 'slick-dots',
//     className: 'slider',
//   };

//   return (
//     <div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img
//               src="frontend/public/stock-photo-content-management-system-and-search-engine-optimization-concept-collage-of-smm-manager-computer-1822644290.jpg"
//               alt="Slide 2"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://www.shutterstock.com/image-vector/content-management-system-concept-cms-business-1056488240"
//               alt="Slide 3"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//         </Slider>
//       </div>

//       <div className='content-container'>
//         <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Content Management System</h4>
//         <h2 style={{ textAlign: 'center' }}>Effortlessly Manage and Publish Your Content</h2>
//         <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           Simplify your content management process with our state-of-the-art Content Management System (CMS). Create, edit, and publish your website's content effortlessly with our intuitive interface. Our CMS platform empowers you to take full control of your website's content, allowing you to showcase your ideas and creativity without any technical hurdles.
//           Whether you're a blogger, a business owner, or a creative professional, our CMS gives you the flexibility and freedom to manage your content in a seamless and efficient manner. Stay ahead in the digital landscape with our powerful CMS and focus on what truly matters - creating engaging and captivating content for your audience.
//         </p>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function LandingPage() {
//   return (
//     <div>
//       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="frontend/public/stock-photo-content-management-system-and-search-engine-optimization-concept-collage-of-smm-manager-computer-1822644290.jpg"
//               alt="Slide 1"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="./frontend/public//home/denniskemboi9/Development/Mod5/Collabo/frontend/public/stock-photo-content-management-system-and-search-engine-optimization-concept-collage-of-smm-manager-computer-1822644290.jpg"
//               alt="Slide 2"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <div className='content-container'>
//         {/* Your existing content */}
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../index.css"

function LandingPage() {
  return (
    <div className="landing-page">


      {/* Hero Section */}
      <section className="hero-section mt-2 text-dark text-center py-5" >
   
          <div className="container justify-content-center">
            <h1 className="display-6">Effortlessly Manage Your Content</h1>
            <h3 id="title" >with<span>    Collabo</span></h3>
            <p className="lead">Whether you're a blogger, a business owner, or a creative professional, our CMS gives you the flexibility and freedom to manage your content in a seamless and efficient manner.</p>
          </div>
        
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-pencil-square display-4 mb-3"></i>
                <h3 id="services">Create Content</h3>
                <p>Write, edit, and publish your content with an intuitive and user-friendly interface.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-bar-chart display-4 mb-3"></i>
                <h3 id="services">Analytics</h3>
                <p>Track and analyze the performance of your content with detailed analytics.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-cloud-upload display-4 mb-3"></i>
                <h3 id="services">Cloud Storage</h3>
                <p>Securely store and access your content from anywhere with cloud storage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default LandingPage;
