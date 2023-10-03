import React, { useState, useEffect } from 'react';
import './Settings.scss';

import TwoFactorAut from './TwoFactorAuth/TwoFactorAut';

function PasswordSettings() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [updatePasswordAlert, setUpdatePasswordAlert] = useState('');
  const [resetPasswordAlert, setResetPasswordAlert] = useState('');
  const [resetPasswordPopupVisible, setResetPasswordPopupVisible] = useState(false); // State for reset password popup visibility

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
    // Function to close the reset password popup
    const closeResetPasswordPopup = () => {
      setResetPasswordPopupVisible(false);
    };
    // Function to clear updatePasswordAlert and resetPasswordAlert after 3 seconds
    const clearAlerts = () => {
      setTimeout(() => {
        setUpdatePasswordAlert('');
        setResetPasswordAlert('');
      }, 3000);
    };

  const handleUpdatePassword = () => {
    // Check if the new and confirm passwords match
    if (newPassword !== confirmPassword) {
      setUpdatePasswordAlert('Passwords do not match.');
    } else {
      // Logic to update the password
      setUpdatePasswordAlert('Password updated successfully.');
      // Clear the input fields
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
    // Clear the alert after 3 seconds
    clearAlerts();
  };

  const handleResetPassword = () => {
    // Logic to send the OTP and choose the method
    // Once OTP is sent, set the resetPasswordAlert accordingly
    setResetPasswordAlert('OTP sent successfully. Choose a method to receive it.');
    // Show the reset password popup
    setResetPasswordPopupVisible(true);
    // Clear the alert after 3 seconds
    clearAlerts();
  };

  return (
    <div className="AllpasswordSettings">
      <span className='PasswordUpdate'>Update Password</span>
      <div className='password-settings'>
        <div className='PasswordInputForm'>
          <label>Old Password:</label>
          <div className="input-container">
            <input
              type={showOldPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
            <button
              className="visibility-toggle"
              onClick={toggleOldPasswordVisibility}
            >
              {showOldPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <label>New Password:</label>
          <div className="input-container">
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              className="visibility-toggle"
              onClick={toggleNewPasswordVisibility}
            >
              {showNewPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <label>Confirm Password:</label>
          <div className="input-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              className="visibility-toggle"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className='newPasswordBtn'>
            <div className='AlertText'>{updatePasswordAlert}</div>
            <button
              className="change-password-button"
              onClick={handleUpdatePassword}
            >
              Update Password
            </button>
          </div>
        </div>
        <div className='ResetPassword'>
          <span className='Reset' onClick={handleResetPassword}>Reset Password</span>
        </div>
      </div>
      {/* =======reset password pop up=============== */}
      {resetPasswordPopupVisible && (
        <div className='ResetPwaPopUpOverlay'>
          <div className='ResetPwaPopUp'>
            <span className='Choose'>Choose where to receive your OTP</span>
            <span className='Closebtn' onClick={closeResetPasswordPopup}>Close</span>

            <div className='OtpOptions'>
              <div className='OptionOtp'>
                <span >Email</span>
              <span>
                <input type="radio" />
                hohn@gmail.com
              </span>
              </div>
              <div className='OptionOtp'>
                <span className='DestinationText'>Number</span>
                <span >
                  <input type="radio" />
                 070538*****27
                </span>
              </div>
            </div>
            <div className='PopUpBtnConater'>
              <div className='AlertText'>{resetPasswordAlert}</div>
              <button className='SendOtp' onClick={handleResetPassword}>
                Send OTP
              </button>
            </div>
          </div>
        </div>
      )}
             {/* ========================================= Two-factor authentication============================== */}
          <div className='SettingsAuthConatiner'>
            <TwoFactorAut/>
          </div>

    </div>
  );
}

export default PasswordSettings;
