import React from 'react';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'; // Import SmsOutlinedIcon
import '../Settings.scss';

function StepTwo({ handleSelect }) {
  return (
    <div className="SmsAuthenticationContainer">
      <div className='smsLeft'>
        <span><SmsOutlinedIcon className='SmsIcon'/></span>
        <div className='smsDetails'>
          <span className='smsText'>SMS Authentication</span>
          <span className='SmsInfo'>Get one-time codes sent to your phone via SMS to complete authentication requests.</span>
        </div>
      </div>
      <div className="selectBtn">
        <span onClick={handleSelect}>Select</span>
      </div>
    </div>
  );
}

export default StepTwo;
