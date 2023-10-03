import React, { useState } from 'react';

function StepThree({ handleEnable }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [otpIsValid, setOtpIsValid] = useState(false); // Placeholder for OTP validation

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGetOtp = () => {
    // Add logic to send OTP here
    setShowCodeInput(true); // Show the OTP input field
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    // Add OTP validation logic here
    if (otpIsValid) {
      // Update authentication status here
      handleEnable();
    }
  };

  return (
    <div className="SmsAuthenticationContainer">
      <div className='VerifyNumber'>
        <div className="AuthPasswordInputs">
          <span>Number</span>
          <span>
            <input
              type="text"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </span>
        </div>
        {showCodeInput && (
          <div className="OtpInputField">
            <span>Code</span>
            <span>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </span>
          </div>
        )}
        <div className="GetotpBtn">
          <span onClick={handleGetOtp}>SUBMIT</span>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
