import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';




function UserBankDetails() {
  return (
    <div className='AccountContiner'>
      <div className='AccountInfo'>
        <div className='WalletBalance'>
            <div className='PriceContainer'>
                <span className='nairaIcon'>N</span>
                <span className='BalanceAmount'>234,000.00</span>
            </div>
        </div>
        <div className='BankDetails'>
            <div className='InfoContainer'>
                <span className='LeftTitle'>Bank Name</span>
                <span className='RightTitle'>Access Bank</span>
            </div>
            <div className='InfoContainer'>
                <span className='LeftTitle'>Account Name</span>
                <span className='RightTitle'>Rachael anderson</span>
            </div>
            <div className='InfoContainer'>
                <span className='LeftTitle'>Account number</span>
                <span className='RightTitle'>085326526279</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserBankDetails
