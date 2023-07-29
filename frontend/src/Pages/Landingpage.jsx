
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i === 0 ? 'white' : 'gray',
          }}
        />
      );
    },
    dotsClass: 'slick-dots',
    className: 'slider',
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="frontend/public/stock-photo-content-management-system-and-search-engine-optimization-concept-collage-of-smm-manager-computer-1822644290.jpg"
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://www.shutterstock.com/image-vector/content-management-system-concept-cms-business-1056488240"
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </Slider>
      </div>

      <div className='content-container'>
        <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Content Management System</h4>
        <h2 style={{ textAlign: 'center' }}>Effortlessly Manage and Publish Your Content</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Simplify your content management process with our state-of-the-art Content Management System (CMS). Create, edit, and publish your website's content effortlessly with our intuitive interface. Our CMS platform empowers you to take full control of your website's content, allowing you to showcase your ideas and creativity without any technical hurdles.
          Whether you're a blogger, a business owner, or a creative professional, our CMS gives you the flexibility and freedom to manage your content in a seamless and efficient manner. Stay ahead in the digital landscape with our powerful CMS and focus on what truly matters - creating engaging and captivating content for your audience.
        </p>
      </div>
    </div>
  );
}

