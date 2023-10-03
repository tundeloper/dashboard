import React, { useState } from 'react';
import './post.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const HighcardRatesData = [
  {
    id: 1,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 2,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 3,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 4,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 5,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 6,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  {
    id: 7,
    HighcardRatesTitle: 'HighcardRates 1 Title',
    Rates: 670,
  },
  // Add more HighcardRates as needed
];

function HighCardRates() {
  const [HighcardRates, setHighcardRates] = useState(HighcardRatesData);
  const [selectedHighcardRates, setSelectedHighcardRates] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const openDeleteDialog = (HighcardRates) => {
    setSelectedHighcardRates(HighcardRates);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedHighcardRates(null);
    setIsDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    if (selectedHighcardRates) {
      // Remove the selected HighcardRates from the array
      const updatedHighcardRates = HighcardRates.filter(
        (HighcardRates) => HighcardRates.id !== selectedHighcardRates.id
      );

      setHighcardRates(updatedHighcardRates);

      // Close the delete dialog
      closeDeleteDialog();
    }
  };

  return (
    <div className='HighcardRatesItem'>
      {HighcardRates.map((HighcardRates) => (
        <div className='MainRatesContainer' key={HighcardRates.id}>
          <div className='InnerHighcardRates'>
            <div className='HighcardRatesDetails'>
              <span className='CardRateTitle'>{HighcardRates.HighcardRatesTitle}</span>
              <div className='HighcardRatesBody'>
                <span>Rates</span>
                <span>{HighcardRates.Rates}</span>
              </div>
            </div>
          </div>
          <div className='ActionButtons'>
            <span
              className='DeleteIcon'
              onClick={() => openDeleteDialog(HighcardRates)}
            >
              <DeleteOutlinedIcon className='IconDelete' />
            </span>
          </div>
        </div>
      ))}
      {/* Delete confirmation dialog */}
      {isDeleteDialogOpen && (
        <div className='DeleteConfirmationDialog'>
          <div className='WarningMessage'>
            <p className='NoticeText'>Are you sure you want to delete this message?</p>
            <div className='ButtonsConatiner'> 
                  <button onClick={handleDelete} className='YesBtn'>Yes</button>
                  <button onClick={closeDeleteDialog}>No</button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default HighCardRates;
