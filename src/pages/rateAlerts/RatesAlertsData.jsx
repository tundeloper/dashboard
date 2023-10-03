import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './RateAlerts.scss';






const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'userName',
    headerName: 'Username',
    width: 250,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={params.row.Userimg}
          alt={params.row.userName}
          style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50px' }}
        />
        {params.row.userName}
      </div>
    ),
  },
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
  { field: 'Category', headerName: 'Category', width: 120 },
  { field: 'SubCategory', headerName: 'Sub category', width: 160 },
  { field: 'CurrentRate', headerName: 'Current Rate', width: 130 },
  { field: 'NotifyMeWhenItIs', headerName: 'Notify me when it is', width: 250 },
  { field: 'NotifyMeVia', headerName: 'Notify me via', width: 140 },
];



const rows = [
  {
    id: 1,
    Userimg: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    userName: "WillaimsUchemba",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Itunes",
    SubCategory: "Itunes Uk",
    CurrentRate: 250,
    NotifyMeWhenItIs: 300,
    NotifyMeVia: "john@gmail.com",
  },
  {
    id: 2,
    Userimg: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    userName: "WillaimsUchemba",
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
    Userimg: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    userName: "WillaimsUchemba",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Itunes",
    SubCategory: "Itunes Uk",
    CurrentRate: 250,
    NotifyMeWhenItIs: 300,
    NotifyMeVia: "john@gmail.com",
  },
  {
    id: 4,
    Userimg: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    userName: "WillaimsUchemba",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    Asset: "Gift Card",
    Category: "Itunes",
    SubCategory: "Itunes Uk",
    CurrentRate: 250,
    NotifyMeWhenItIs: 300,
    NotifyMeVia: "john@gmail.com",
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
