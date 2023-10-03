import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './UserProfile.scss'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Asset',
    headerName: 'Asset',
    width: 160,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={params.row.img}
          alt={params.row.Asset}
          style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50px' }}
        />
        {params.row.Asset}
      </div>
    ),
  },
  { field: 'Category', headerName: 'Category', width: 160 },
  { field: 'SubCategory', headerName: 'Sub category', width: 160 },
  { field: 'CurrentRate', headerName: 'Current Rate', width: 160 },
  { field: 'NotifyMeWhenItIs', headerName: 'Notify me when it is', width: 250 },
  { field: 'NotifyMeVia', headerName: 'Notify me via', width: 160 },
];



const rows = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Amazon",
    SubCategory: "Amazon Us",
    CurrentRate: 360,
    NotifyMeWhenItIs: 400,
    NotifyMeVia: "080123456789",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Itunes",
    SubCategory: "Itunes Uk",
    CurrentRate: 250,
    NotifyMeWhenItIs: 300,
    NotifyMeVia: "john@gmail.com",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Amazon",
    SubCategory: "Amazon Us",
    CurrentRate: 360,
    NotifyMeWhenItIs: 400,
    NotifyMeVia: "080123456789",
  },
];

function UserRatesAlert() {

  

  return (
    <div className='RatesTableContainer'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default UserRatesAlert;
