import React, { useState } from 'react';
import './wallet.scss'; // Make sure to import your CSS file

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

function Wallet() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'PAYSTACK', content: "content here"},
    { label: 'BTC', content: "content here"},
    { label: 'USDT', content: "content here"},
    { label: 'ETHEREUM', content: "content here"},
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="WalletContainer">
      <div className='pageTitle'>
        <span className='PageNme'>Wallet accounts</span>
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

export default Wallet;