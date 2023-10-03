import React, { useState } from 'react';
import './UserProfile.scss'
import UserTransactions from './UserTransactions';
import UserReferralList from './UserReferralList';
import UserBankDetails from './UserBankDetails';
import UserRatesAlert from './UserRatesAlert';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import VerifiedIcon from '@mui/icons-material/Verified';

function UserProfile() {
  const [activeTab, setActiveTab] = useState('Transactions');
  const [isUserEnabled, setIsUserEnabled] = useState(true); // Initially, the user is enabled


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleUserStatus = () => {
    setIsUserEnabled((prevStatus) => !prevStatus);
  };

  return (
    
    <div className='UserProfileContainer'>

      <div className="TopProfileSection">
        <div className='UserProfileDetails'>
          <div className='DiableAndEnableUser'>
            <div className='ActionBtn'>
            <div onClick={toggleUserStatus} className='UserAction'>
                {isUserEnabled ? (
                  <span className='Enabled' >
                   <ToggleOnIcon className='ToggleOnbtn'/> Enabled
                  </span>
                ) : (
                  <span className='Disabled'>
                    <ToggleOffIcon className='ToggleOffbtn'/> Disabled
                  </span>
                )}
              </div>
            </div>
          </div>
            <div className='ProfileInfo'>
                <div className='ProfileIMageContainer'>
                <img className='UserProfilePicture' src= "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
                <div className='BadgeContainer'>
                  <VerifiedIcon className='VerifiedBadge'/>
                 <span className='VerificationStatus'>
                      Verified
                 </span>
                </div>
            </div>
            <div className='UpdateProfileContainer'>
              <form className='FormContainer' action="">
               <div className='rowOne'>
                <label className='InputField'>
                    Username
                      <input type="text" className='doubleInput'
                      />
                  </label>
                <label className='InputField'>
                    Phone number
                      <input type="number" className='doubleInput' 
                      />
                  </label>
               </div>
              <div className='rowTwo'>
                <label className='InputField'>
                    First Name
                      <input type="text" className='doubleInput'
                      />
                  </label>
                <label className='InputField'>
                    Last name
                      <input type="text" className='doubleInput'
                      />
                  </label>
               </div>
               <div className='rowThree'>
                <label className='InputField'>
                    Email
                      <input type="text" className='emailInput'
                      />
                  </label>
               </div>
               <div className='UserRole'>
                <span className='UserRoleLabel'>Update Role</span>
                <select name="Role" id="" className='UserRoleSelect'>
                  <option value="Admin" >Admin</option>
                  <option value="Admin" >Manager</option>
                  <option value="Admin" >User</option>
                </select>
               </div>
               <div className='UpdateProfileBtn'>UPDATE PROFILE</div>
              </form>
            </div>
          </div>
        </div>
          <div className='BottomProfileSection'>
            <div className="tabBar">
              <span
                className={`Tab ${activeTab === 'Transactions' ? 'active' : ''}`}
                onClick={() => handleTabClick('Transactions')}
              >
                Transactions
              </span>
              <span
                className={`Tab ${activeTab === 'Rate Alerts' ? 'active' : ''}`}
                onClick={() => handleTabClick('Rate Alerts')}
              >
                Rate Alerts
              </span>
              <span
                className={`Tab ${activeTab === 'Bank Details' ? 'active' : ''}`}
                onClick={() => handleTabClick('Bank Details')}
              >
                Bank Details
              </span>
              <span
                className={`Tab ${activeTab === 'Referrals' ? 'active' : ''}`}
                onClick={() => handleTabClick('Referrals')}
              >
                My Referrals
              </span>
            </div>

         {/* Conditionally render content for other tabs */}
          {activeTab === 'Transactions' && (
            <UserTransactions/>
          )}

          {activeTab === 'Rate Alerts' && ( 
           <UserRatesAlert/>
          )}

          {activeTab === 'Bank Details' && (
            <UserBankDetails/>
          )}

          {activeTab === 'Referrals' && (
             <UserReferralList/>
          
          )}
        </div>
          </div>
          

     
     
  );
}

export default UserProfile;