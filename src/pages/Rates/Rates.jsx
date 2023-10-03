import React, { useState } from 'react';
import './rates.scss';
import CryptoRates from './CryptoRates';
import GiftcardRates from './GiftcardRates';




function Rates() {
  const [activeTab, setActiveTab] = useState('Set Rates');
  const [selectedIcon, setSelectedIcon] = useState(null); // To store the selected icon image file
  const [iconError, setIconError] = useState(''); // To store and display icon validation error
  const [selectedProduct, setSelectedProduct] = useState('Select'); // Store the selected product



  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleIconChange = (event) => {
    const iconFile = event.target.files[0];
    if (iconFile) {
      const image = new Image();
      image.src = URL.createObjectURL(iconFile);
      image.onload = () => {
        if (image.width <= 100 && image.height <= 100) {
          setSelectedIcon(iconFile);
          setIconError('');
        } else {
          setSelectedIcon(null);
          setIconError('Icon image dimensions must not exceed 100x100 pixels.');
        }
      };
    } else {
      setSelectedIcon(null);
      setIconError('');
    }
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value); // Update the selected product
  };

  return (
    <div className='rateContainer'>
      <div className="rateContent"> 
        <div className="rates">
          <span className="pageTitle">Rates</span>
          <div className="tabBar">
            <span 
              className={`Tab ${activeTab === 'Set Rates' ? 'active' : ''}`}
              onClick={() => handleTabClick('Set Rates')}
            >
              Set Rates
            </span>
            <span
              className={`Tab ${activeTab === 'Giftcard' ? 'active' : ''}`}
              onClick={() => handleTabClick('Giftcard')}
            >
              Giftcard
            </span>
            <span
              className={`Tab ${activeTab === 'Cryptocurrency' ? 'active' : ''}`}
              onClick={() => handleTabClick('Cryptocurrency')}
            >
              Crypto
            </span>
          </div>

          {activeTab === 'Set Rates' && (
            <div className="setRates">
              <form className='setRatesForm'>
                <div className="inputfield">
                  <label className='inputLabel'>Product</label>
                  <select required onChange={handleProductChange} value={selectedProduct}>
                    <option value="Select">Select</option>
                    <option value="Giftcard">Giftcard</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Usdt">Usdt</option>
                  </select>
                </div>

                {selectedProduct === 'Giftcard' ? (
                  <>
                    <div className="inputfield">
                      <label className='inputLabel' >Type</label>
                      <select required>
                        <option value="Select">Select</option>
                        <option value="Amazon">Amazon card</option>
                        <option value="Itunes">Itunes card</option>
                        <option value="Walmart">Walmart card</option>
                      </select>
                    </div>
                    <div className="inputfield">
                      <label className='inputLabel'>Category</label>
                      <select required>
                        <option value="Select">Select</option>
                        <option value="category1">Amazon australia</option>
                        <option value="category2">Amazon uk</option>
                        <option value="category3">Amazon us 0</option>
                      </select>
                    </div>
                    <div className="inputfield">
                      <label className='inputLabel'>Price Range</label>
                      <select required>
                        <option value="Select">Select</option>
                        <option value="category1">Amazon 50 - 100</option>
                        <option value="category2">Amazon 100- 500</option>
                        <option value="category3">Amazon 500- 1000</option>
                      </select>
                    </div>
                  </>
                ) : null}

                <div className="inputfield">
                  <label className='inputLabel'>Rate</label>
                  <input type="number" required className='amountInput' />
                </div>
                <div className="iconInput">
                  <label className='inputLabel'>Icon</label>
                    <div className='ChooseIcon'>
                      <div className='UploadImageIcon'>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleIconChange}
                          required
                          className='iconUpload'
                        />
                        <span className='PlusText'>+</span>
                      </div>
                      {selectedIcon && (
                        <img src={URL.createObjectURL(selectedIcon)} alt="Selected Icon" className='DisplayedIcon' />
                      )}
                      {iconError && (
                        <div className="error">{iconError}</div>
                      )}
                   </div>
                </div>
                <div className='updateBtn'>UPDATE</div>
              </form>
            </div>
          )}

          {/* Conditionally render content for other tabs */}
          {activeTab === 'Giftcard' && (
           <GiftcardRates/>
          )}

          {activeTab === 'Cryptocurrency' && ( 
            <CryptoRates/>
          )}

        </div>
      </div>
    </div>
  );
}

export default Rates;
