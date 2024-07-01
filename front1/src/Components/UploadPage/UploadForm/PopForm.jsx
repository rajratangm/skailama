import React from 'react';
import './PopForm.css'; // Import your CSS file for styling adjustments

const PopForm = ({ card, closePopup }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = {
      name: e.target.name.value,
      text: e.target.text.value,
    };

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Close the popup after submission
    closePopup();
  };

  return (
    <div className="popup-form">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>&times;</span>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="text">Description:</label>
            <input type="text" id="text" name="text" />
          </div>
          <button type="submit" className="submit-button">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default PopForm;
