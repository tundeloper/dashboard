import React, { useState } from "react";
import "./transactionTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const transactionsPerPage = 9;

  const rows = [
    {
        id: 11455,
        product: "Amazon card",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 785,
        status: "Successful",
      },
      {
        id: 323523,
        product: "Itunes card",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2765235,
        product: "Btc",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Failed",
      },
      {
        id: 2234235,
        product: "Eherium",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
    {
        id: 1243155,
        product: "Amazon card",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        status: "Successful",
      },
      {
        id: 2288235,
        product: "Itunes card",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2226235,
        product: "Btc",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2235005,
        product: "Eherium",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
    {
        id: 1113155,
        product: "Amazon card",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        status: "Successful",
      },
      {
        id: 2335235,
        product: "Itunes card",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2444235,
        product: "Btc",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "failed",
      },
      {
        id: 2543235,
        product: "Eherium",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
    {
        id: 1112355,
        product: "Amazon card",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        status: "Successful",
      },
      {
        id: 2234535,
        product: "Itunes card",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2209835,
        product: "Btc",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
      {
        id: 2876235,
        product: "Eherium",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
       customer: "John Smith",
        Email: "john@gmail.com",
        Number: '080123456789',
        date: "1 March",
        amount: 900,
        status: "Pending",
      },
  ];

const filteredRows = rows.filter((row) =>
    row.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.id.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.status.toLowerCase().includes(searchQuery.toLowerCase())
);

    // Calculate the indexes for the transactions to display on the current page.
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;

    // Slice the transactions for the current page.
    const transactionsToShow = filteredRows.slice(startIndex, endIndex);

    // Function to handle page change.
    const handlePageChange = (event, page) => {
    setCurrentPage(page);
    };

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    };

    return (
        <div>
          <input className="transactSearch"
            type="text"
            placeholder="Search all transactions..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
    
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Tracking ID</TableCell>
                  <TableCell className="tableCell">Product</TableCell>
                  <TableCell className="tableCell">Customer</TableCell>
                  <TableCell className="tableCell">Customer Email</TableCell>
                  <TableCell className="tableCell">Customer Number</TableCell>
                  <TableCell className="tableCell">Date</TableCell>
                  <TableCell className="tableCell">Amount</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            {transactionsToShow.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.Email}</TableCell>
                <TableCell className="tableCell">{row.Number}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredRows.length / transactionsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default List;
