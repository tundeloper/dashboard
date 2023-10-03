import React, { useState } from 'react';
import './post.scss';
import Notifications from './Notifications';
import HighCardRates from './HighCardRates';

function CreateNew() {
  const [activeTab, setActiveTab] = useState('Notifications');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='AllPostsContainer'>
      <div className='HeaderContainer'>
        <span className='PageTitle'>
          See all notifications and high card rates here
        </span>
      </div>
      <div className='TabContainer'>
        <span
          className={`TabSlide ${
            activeTab === 'Notifications' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Notifications')}
        >
          Notifications
        </span>
        <span
          className={`TabSlide ${
            activeTab === 'High card rates' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('High card rates')}
        >
          High card rates
        </span>
      </div>
      <div className='TabContents'>
        {/* ==========contents for notification tab=============== */}
        {activeTab === 'Notifications' && (
          <div className='NotificationContent active'>
          <Notifications/>
          </div>
        )}

        {/* ==========contents for high card rates tab=============== */}
        {activeTab === 'High card rates' && (
          <div className='RatesContent active'>
           <HighCardRates/>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNew;
