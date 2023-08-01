
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contentType: '',
    status: '',
    image: null,
    video: null,
  });

  const { title, description, contentType, status, image, video } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleVideoChange = (e) => {
    setFormData({
      ...formData,
      video: e.target.files[0],
    });
  };

  const handlePostNow = () => {
    // Handle the form submission logic immediately (POST to the backend).
    submitFormToBackend();
  };

  const handlePostLater = () => {
    // Handle storing the form data locally for later submission.
    storeFormDataLocally();
  };

  const submitFormToBackend = () => {
    // Here, you can perform the API call to your backend to submit the form data immediately.
    console.log('Form data submitted to the backend:', formData);
  };

  const storeFormDataLocally = () => {
    // Here, you can store the form data in the browser's local storage or any other client-side storage mechanism.
    console.log('Form data stored locally:', formData);
  };

  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Col lg={8} md={10} sm={12}>
        <h2 className="text-center mb-4">Upload <i className="mdi mdi-content-copy"></i></h2>
        <Form className="">
          <Row className="mb-3">
            <Col>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={4}
                value={description}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Content Type:</Form.Label>
              <Form.Control
                type="text"
                name="contentType"
                value={contentType}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Status:</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={status}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Col>
            <Col>
              <Form.Label>Video:</Form.Label>
              <Form.Control
                type="file"
                name="video"
                accept="video/*"
                onChange={handleVideoChange}
              />
            </Col>
          </Row>
          <div className="text-center">
            <Button onClick={handlePostNow} className="me-2">Post</Button>
            <Button variant="secondary" onClick={handlePostLater} className='post-later'>Post Later</Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
};

export default Upload;

