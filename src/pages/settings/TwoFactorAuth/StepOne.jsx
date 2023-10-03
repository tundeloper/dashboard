import React, { useState } from 'react';
import '../Settings.scss';

function StepOne({ handleContinue }) {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(true); // Reset the validation message on password change
  };

  const handleSubmit = () => {
    // Add password validation logic here
    // Example validation: Check if the password meets your criteria
    if (passwordIsValid(password)) {
      handleContinue();
    } else {
      setIsPasswordValid(false); // Set validation message if the password is invalid
    }
  };

  const passwordIsValid = (password) => {
    // Implement your password validation logic here
    // Return true if the password is valid, otherwise return false
    // Example: Check if the password is at least 8 characters long
    return password.length >= 8;
  };

  return (
    <div className="ConfirmAcessContainer">
      <div className="ConfirmAcessForm">
        <div className='AccessHead'>
          <span>Image Logo</span>
          <span>Confirm Access</span>
        </div>
        <div className='BotomSectionPwa'>
          <div className='ConfirmIdentityInput'>
            <input
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <span className='Whattodonext'>
              {isPasswordValid ? 'Enter password to continue' : 'Password must be at least 8 characters long'}
            </span>
            <div className='Identitybtn'>
              <span onClick={handleSubmit}>Continue</span>
            </div>
          </div>
        </div>
        <span>Tip: You are entering sudo mode. After you've performed a sudo-protected action, 
          you'll only be asked to re-authenticate again after a few hours of inactivity.</span>
          <div className="ConfirmIdentityInput">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <span className="Whattodonext">Enter password to continue</span>
          <div className="Identitybtn">
            <span onClick={handleSubmit}>Continue</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;

