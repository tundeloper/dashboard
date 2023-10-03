import React from 'react';
import './userDetailsPopup.scss'; // Create a separate CSS file for styling

function UserDetailsPopup({ user, onClose }) {
  return (
    <div className="user-details-popup">
      <div className="popup-content">
        <div className="user-info">
          <img src={user.img} alt="" className="user-image" />
          <div className="user-details">
            <h2>{user.name}</h2> 
            <p>Details: {user.Details}</p>
            <p>ID Card File: {user.IdCardfile}</p>
            <p>NIN: {user.NIN}</p>
            <p>Date of Request: {user.DateOfRequest}</p>
          </div>
        </div>
        <div className="popup-actions">
          <button className="approve-btn">Approve</button>
          <button className="reject-btn">Reject</button>
        </div>
        <button className="close-btn" onClick={onClose}>
        Close
      </button>
      </div>
    </div>
  );
}

export default UserDetailsPopup;
