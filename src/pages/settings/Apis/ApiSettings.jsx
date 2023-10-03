import React, { useState } from 'react';
import './PayStackeApi.scss';
import PayStackeApi from './PayStackeApi'

function Tab({ label, content, isActive, onClick }) {
  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

function TabContent({ children }) {
  return <div className="tab-content">{children}</div>;
}

function ApiSettings() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'PAYSTACK API KEY', content: <PayStackeApi/> },
    { label: 'CRYPTO API KEY', content: 'Content for crypto api key' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="WalletContainer">
      <div className='pageTitle'>
        <span className='PageNme'>Api Keys & Settings</span>
      </div>
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  );
}

export default ApiSettings;