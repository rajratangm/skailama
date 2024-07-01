import React, { useState } from 'react';
import './WidgetConfiguration.css'; // Import the CSS file for styling


const ButtonFormSelector = () => {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  // Render different forms or content based on activeButton state
  const renderFormContent = () => {
    switch (activeButton) {
      case 1:
        return (
          <div className="form-container">
            <h2>Personal Information</h2>
            <form>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />

              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" />

              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="form-container">
            <h2>Survey</h2>
            <form>
              <label htmlFor="satisfaction">How satisfied are you with our service?</label>
              <select id="satisfaction" name="satisfaction">
                <option value="verySatisfied">Very Satisfied</option>
                <option value="satisfied">Satisfied</option>
                <option value="neutral">Neutral</option>
                <option value="dissatisfied">Dissatisfied</option>
                <option value="veryDissatisfied">Very Dissatisfied</option>
              </select>

              <label htmlFor="improvement">What areas do you think we can improve? (Check all that apply)</label>
              <div>
                <input type="checkbox" id="quality" name="improvement" value="quality" />
                <label htmlFor="quality">Quality</label>
              </div>
              <div>
                <input type="checkbox" id="speed" name="improvement" value="speed" />
                <label htmlFor="speed">Speed</label>
              </div>
              <div>
                <input type="checkbox" id="customerService" name="improvement" value="customerService" />
                <label htmlFor="customerService">Customer Service</label>
              </div>
              <div>
                <input type="checkbox" id="pricing" name="improvement" value="pricing" />
                <label htmlFor="pricing">Pricing</label>
              </div>

              <label htmlFor="comments">Any additional comments:</label>
              <textarea id="comments" name="comments"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        );
      default:
        return null; // Render nothing if no button is active
    }
  };

  return (
    <div className="button-form-selector">
      {/* Buttons for selection */}
      <div className="button-container">
        <button
          className={`form-button ${activeButton === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          Personal Info
        </button>
        <button
          className={`form-button ${activeButton === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          Survey
        </button>
        <button
          className={`form-button ${activeButton === 3 ? 'active' : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          Form 3
        </button>
      </div>

      {/* Render form or content based on activeButton state */}
      <div className="form-content">
        {renderFormContent()}
      </div>
    </div>
  );
};

export default ButtonFormSelector;
