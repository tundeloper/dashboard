import React, { useState } from 'react';
import './Settings.scss';
import PasswordSettings from './PasswordSettings';
import PayStackeApi from './Apis/PayStackeApi';


function Settings() {
  const [activeTab, setActiveTab] = useState('Security');


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className='rateContainer'>
      <div className="rateContent">
        <div className="rates">
          <span className="pageTitle">Settings</span>
          <div className="tabBar">
            <span 
              className={`Tab ${activeTab === 'Security' ? 'active' : ''}`}
              onClick={() => handleTabClick('Security')}
            >
             Security
            </span>
            <span
              className={`Tab ${activeTab === 'Api keys' ? 'active' : ''}`}
              onClick={() => handleTabClick('Api keys')}
            >
             Api keys
            </span>
          
          </div>

          {activeTab === 'Security' && (
            <div className="setRates">
                <PasswordSettings/>
            </div>
          )}

          {/* Conditionally render content for other tabs */}
          {activeTab === 'Api keys' && (
            <div className="ApiRates">
              <div className="alert">
                <span className="AlertText">
                    <PayStackeApi/>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
