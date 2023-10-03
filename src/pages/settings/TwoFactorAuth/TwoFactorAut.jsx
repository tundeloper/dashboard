import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import '../Settings.scss';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function TwoFactorAut() {
  const [step, setStep] = useState(0);
  const [isAuthenticationEnabled, setIsAuthenticationEnabled] = useState(false);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleEnableAuthentication = () => {
    setIsAuthenticationEnabled(true);
    setStep(0); // Reset the step to 0 when enabling authentication
  };

  return (
    <div className="AuthConatiner">
      <div className="TwoFactorAuthentication">
        <div className='TwoFactorHead'> 
          <span className='TwoFactorText'>Two-factor authentication</span>
        </div>
          <div className='TwoFactorbody'>
            <div className="TopHfactorBody">
              <LockOutlinedIcon className="LockIcon" />
              <span className="FactorTitleText">
                Two-factor authentication has been not been enabled.
              </span>
            </div>
            <span className='BodYText'>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.
            </span>
          </div>
        {isAuthenticationEnabled ? (
          // Show authentication content if enabled
          <div className="FactorContents">
            {step === 0 && (
              <StepOne handleContinue={() => handleStepChange(1)} />
            )}
            {step === 1 && (
              <StepTwo handleSelect={() => handleStepChange(2)} />
            )}
            {step === 2 && (
              <StepThree handleEnable={handleEnableAuthentication} />
            )}
          </div>
        ) : (
          // Display the button to enable authentication if not enabled
          <div className='EnableBtnContainer'>
            <span className='EnableBtn' onClick={handleEnableAuthentication}>
              Enable Two-factor authentication
            </span>
          </div>
        )}

        {isAuthenticationEnabled && (
          <div className='TwoFactorbody'>
            <div className="TopHfactorBody">
              <LockOutlinedIcon className="LockIcon" />
              <span className="FactorTitleText">
                Two-factor authentication has been enabled.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoFactorAut;
