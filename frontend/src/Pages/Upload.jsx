import React, { useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contentType: '',
    status: '',
  });

  const { title, description, contentType, status } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    <div>
      <h1>Upload <i className="mdi mdi-content-copy:"></i></h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={description}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="contentType">Content Type:</label>
        <input
          type="text"
          id="contentType"
          name="contentType"
          value={contentType}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={handleChange}
          required
        />
        <br />

        <button type="button" onClick={handlePostNow}>Post</button>
        <button type="button" onClick={handlePostLater}>Post Later</button>
      </form>
    </div>
  );
};

export default Upload;


