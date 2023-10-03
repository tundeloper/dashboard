import React, { useState } from 'react';
import './ApiStyles.scss';

function PayStackeApi() {
  const [isPaystackEnabled, setIsPaystackEnabled] = useState(false);
  const [isTestModeEnabled, setIsTestModeEnabled] = useState(false);
  const [testSecretKey, setTestSecretKey] = useState('');
  const [testPublicKey, setTestPublicKey] = useState('');
  const [liveSecretKey, setLiveSecretKey] = useState('');
  const [livePublicKey, setLivePublicKey] = useState('');
  const [showTestSecret, setShowTestSecret] = useState(false); 
  const [showLiveSecret, setShowLiveSecret] = useState(false); 

  const handlePaystackToggle = () => {
    setIsPaystackEnabled(!isPaystackEnabled);
  };

  const handleTestModeToggle = () => {
    setIsTestModeEnabled(!isTestModeEnabled);
  };

  const toggleShowTestSecret = () => {
    setShowTestSecret(!showTestSecret);
  };

  const toggleShowLiveSecret = () => {
    setShowLiveSecret(!showLiveSecret);
  };

  return (
    <div className='PaystackActivationFormContainer'>
      <div className='heading'>
      <span className='paystack'>PAYSTACK</span>
      </div>
      <div className='NoticeContainer'>
        <span className='NoticeText'>
          Optional: To avoid situations where bad network makes it impossible to verify transactions, set your webhook URL{' '}
          <a href="https://dashboard.paystack.co/#/settings/developer">here</a> to the URL below.
        </span>
        <span className='Url'>https://example.com/Paystack_Webhook/</span>
      </div>
      <div className='PaystackActivationForm'>
        <div className='OptionsContainer'>
          <div className='Options'>
            <span className='LeftTitle'> Enable/Disable</span>
            <div className='Rightcontent'>
              <label className='CheckBoxField'>
                <span className='infoMark'>?</span>
                <input
                  type='checkbox'
                  checked={isPaystackEnabled}
                  onChange={handlePaystackToggle}
                />
                Enable Paystack
              </label>
            </div>
          </div>
          
          <div className='Options'>
            <span className='LeftTitle'>Test mode</span>
            <label className='CheckBoxField'>
              <span className='infoMark'>?</span>
              <input
                type='checkbox'
                checked={isTestModeEnabled}
                onChange={handleTestModeToggle}
              />
              Enable Test Mode
            </label>
          </div>
          
          {/* Test secret key */}
          {isTestModeEnabled && (
            <div className='Options'>
              <span className='LeftTitle'>Test Secret Key</span>
              <div className='InputFormField'>
                <span className='infoMark'>?</span>
                <div className='InputContainer'>
                  <div className='InputField'>
                    <input
                      type={showTestSecret ? 'text' : 'password'}
                      placeholder='Test secret key'
                      value={testSecretKey}
                      onChange={(e) => setTestSecretKey(e.target.value)}
                    />
                    <button onClick={toggleShowTestSecret}>
                      {showTestSecret ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <span className='LabelText'>Enter your Test Secret Key here.</span>
                </div>
              </div>
            </div>
          )}

          {/* Test Public key */}
          {isTestModeEnabled && (
            <div className='Options'>
              <span className='LeftTitle'>Test Public Key</span>
              <div className='InputFormField'>
                <span className='infoMark'>?</span>
                <div className='InputContainer'>
                  <div className='InputField'>
                    <input
                      type='text'
                      placeholder='Test public key'
                      value={testPublicKey}
                      onChange={(e) => setTestPublicKey(e.target.value)}
                    />
                  </div>
                  <span className='LabelText'>Test your Live Public Key here.</span>
                </div>
              </div>
            </div>
          )}

          {/* Live secret key */}
          {!isTestModeEnabled && (
            <div className='Options'>
              <span className='LeftTitle'>Live Secret Key</span>
              <div className='InputFormField'>
                <span className='infoMark'>?</span>
                <div className='InputContainer'>
                  <div className='InputField'>
                    <input
                      type={showLiveSecret ? 'text' : 'password'}
                      placeholder='Live secret key'
                      value={liveSecretKey}
                      onChange={(e) => setLiveSecretKey(e.target.value)}
                    />
                    <button onClick={toggleShowLiveSecret}>
                      {showLiveSecret ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <span className='LabelText'>Enter your Live Secret Key here.</span>
                </div>
              </div>
            </div>
          )}

          {/* Live Public key */}
          {!isTestModeEnabled && (
            <div className='Options'>
              <span className='LeftTitle'>Live Public Key</span>
              <div className='InputFormField'>
                <span className='infoMark'>?</span>
                <div className='InputContainer'>
                  <div className='InputField'>
                    <input
                      type='text'
                      placeholder='Live public key'
                      value={livePublicKey}
                      onChange={(e) => setLivePublicKey(e.target.value)}
                    />
                  </div>
                  <span className='LabelText'>Enter your Live Public Key here.</span>
                </div>
              </div>
            </div>
          )}
        </div>
       <div className='BtnContainer'>
            <span className='SubmitBtn'>ACTIVATE</span>
       </div>
      </div>
    </div>
  );
}

export default PayStackeApi;
