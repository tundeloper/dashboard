import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import './UserProfile.scss'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'UserName',
    headerName: 'User Name',
    width: 300,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={params.row.img}
          alt={params.row.UserName}
          style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50px' }}
        />
        {params.row.UserName}
      </div>
    ),
  },
  { field: 'FirstName', headerName: 'First Name', width: 160 },
  { field: 'LastName', headerName: 'Last Name', width: 160 },
  { field: 'Email', headerName: 'Email', width: 160 },
  { field: 'Number', headerName: 'Number', width: 160 },
  { field: 'Status', headerName: 'Status', width: 130 },
  {
    field: 'ViewProfile',
    headerName: 'View Profile',
    width: 130,
    renderCell: (params) => <ViewProfileCell userId={params.row.UserName} />,
  },
];

function ViewProfileCell({ userId }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className='ViewUserBtn' onClick={handleViewProfile}>
      View Profile
    </div>
  );
}

const rows = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    UserName: "Anderson123",
    FirstName: "Williams",
    LastName: "Anderson",
    Email: "williams@gmail.com",
    Number: "080123456789",
    Status: "Verified",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    UserName: "Miracle34gousf",
    FirstName: "Williams",
    LastName: "Anderson",
    Email: "williams@gmail.com",
    Number: "080123456789",
    Status: "Verified",
  },
];

function UserReferralList() {
  const navigate = useNavigate();
  

  return (
    <div className='RatesTableContainer'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        onCellClick={(params) => {
            if (params.field === 'ViewProfile') {
              const userId = params.row.UserName; // Get the user's id
              navigate(`/profile/${userId}`); // Navigate to the user's profile
            }
          }}
      />
    </div>
  );
}

export default UserReferralList;
