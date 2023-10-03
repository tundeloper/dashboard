import React from 'react';
import './rates.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'product',
    headerName: 'Product',
    width: 300,
    renderCell: (params: GridValueGetterParams) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={params.row.img}
          alt={params.row.product}
          style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50px' }}
        />
        {params.row.product}
      </div>
    ),
  },
  { field: 'Type', headerName: 'Type', width: 160 },
  { field: 'Category', headerName: 'Category', width: 160 },
  { field: 'CategoryRange', headerName: 'Category Range', width: 160 },
  { field: 'Rate', headerName: 'Rate', width: 160 },
];

const rows = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    product: "Zelle card",
    Type: "Amazon card",
    Category: "Amazon US",
    CategoryRange: "$50-100",
    Rate: 785,
  },
];

export default function GiftcardRates() {
  return (
    <div className='RatesTableContainer'>
      <div className='AddNewBtn'>
        Add New
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


