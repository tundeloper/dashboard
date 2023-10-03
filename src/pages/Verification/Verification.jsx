import React, { useState, useEffect } from 'react';
import './verification.scss';
import UserDetailsPopup from '../../components/userDetailsPopup/userDetailsPopup';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// navigation========
// import Navbar from '../../components/navbar/Navbar';
// import Sidebar from '../../components/sidebar/Sidebar';

function Verification() {
  const [users, setUsers] = useState([
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Joy",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Mathew anderson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "sarah kehinde",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Miracle Marcel",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Samson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Kelly wilson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Michael wilson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "janet williams",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Oluchi amanso",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Success aderson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "rachael samnson",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Eniola badmus",
      Details: "Is requesting verification",
      IdCardfile: "nationalid.pdf",
      NIN: "  23536332536373883",
      DateOfRequest: ""
    },
    // Add more users here...
  ]);
  // ======active tab screens========
  const [activeScreen, setActiveScreen] = useState("allRequests");

  ///page pagination======
  const [currentPageRequest, setCurrentPageRequest] = useState(0);
  const [currentPageStatus, setCurrentPageStatus] = useState(0);
  const usersPerPage = 6;

  // =======user requests==========
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Your useEffect logic here...
  }, [currentPageRequest, currentPageStatus, users]);

  const handleApprove = (user) => {
    // Move the user to the approved users list
    setApprovedUsers([...approvedUsers, user]);
    // Remove the user from the main users list
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    // Set the active screen to "approvedUsers"
    setActiveScreen("approvedUsers");
  };
  
  const handleReject = (user) => {
    // Move the user to the rejected users list
    setRejectedUsers([...rejectedUsers, user]);
    // Remove the user from the main users list
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    // Set the active screen to "rejectedUsers"
    setActiveScreen("rejectedUsers");
  };


  const handleViewUserDetails = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className='VerificationContainer'>
      {/* <Sidebar /> */}

      <div className="mainContainer">
        {/* <Navbar /> */}
        <div className="titleContainer">
        <span className="pageTitle">User verification requests</span>
        </div>
        <div className="VerificationNavBar">
        <span
            className={`allrequestNav ${activeScreen === "allRequests" ? "active" : ""}`}
            onClick={() => setActiveScreen("allRequests")}
          >
            All requests
          </span>

          <span
            className={`rejectedNav ${activeScreen === "rejectedUsers" ? "active" : ""}`}
            onClick={() => setActiveScreen("rejectedUsers")}
          >
            Rejected Users
          </span>

          <span
            className={`aprovedNav ${activeScreen === "approvedUsers" ? "active" : ""}`}
            onClick={() => setActiveScreen("approvedUsers")}
          >
            Approved Users
          </span>

        </div>
        <div className="VerificationList">
      {activeScreen === "allRequests" && (
      <div className="requestContainer">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          {/* Table headers and user mapping for all requests */}
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">User</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(currentPageRequest * usersPerPage, (currentPageRequest + 1) * usersPerPage).map((user) => (
              <TableRow key={user.name}>
                <TableCell className="tableCell">
                  <div className="userRequest">
                    <img src={user.img} alt="" className="requestImage" />
                    <div className="requestInfo">
                      <span className="name">{user.name}</span>
                    <div className="info">
                      <span className="details">{user.Details}</span>
                      <span className='view' onClick={() => handleViewUserDetails(user)}>
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className='actionBtn'>
                  <button
                    className='approveBtn'
                    onClick={() => handleApprove(user)}
                  >
                    Approve
                  </button>
                  <button
                    className='rejectBtn'
                    onClick={() => handleReject(user)}
                  >
                    Reject
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {users.length > usersPerPage && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPageRequest(currentPageRequest - 1)}
            disabled={currentPageRequest === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPageRequest(currentPageRequest + 1)}
            disabled={(currentPageRequest + 1) * usersPerPage >= users.length}
          >
            Next
          </button>
        </div>
      )}
     </TableContainer>
     </div>
      )}

         {/* // =========================approved users=========================== */}
         {activeScreen === "approvedUsers" && (
         <div className="VerificationStatus">
         <TableContainer component={Paper} className="table">
           <Table sx={{ minWidth: 500 }} aria-label="simple table">
             <TableHead>
               <TableRow>
                 <TableCell className="tableCell">User</TableCell>
                 <TableCell className="tableCell">Status</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {approvedUsers.slice(currentPageStatus * usersPerPage, (currentPageStatus + 1) * usersPerPage).map((user) => (
                 <TableRow key={user.name}>
                   <TableCell className="tableCell">
                     <div className="approvedOrRejected">
                       <img src={user.img} alt="" className="requestImage" />
                       <div className="approvedOrRejectedInfo">
                         <span className="name">{user.name}</span>
                         <div className="info">
                           <span className='view' onClick={() => handleViewUserDetails(user)}>
                             View
                           </span>
                         </div>
                       </div>
                     </div>
                   </TableCell>
                   <TableCell className="tableCell">
                     <button className='approveBtn'> Approved</button>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
           {(approvedUsers.length > usersPerPage) && (
             <div className="pagination">
               <button
                 onClick={() => setCurrentPageStatus(currentPageStatus - 1)}
                 disabled={currentPageStatus === 0}
               >
                 Previous
               </button>
               <button
                 onClick={() => setCurrentPageStatus(currentPageStatus + 1)}
                 disabled={(currentPageStatus + 1) * usersPerPage >= Math.max(approvedUsers.length)}
               >
                 Next
               </button>
             </div>
           )}
         </TableContainer>
       </div>
      )}
       {/* // =========================rejected users=========================== */}
      {activeScreen === "rejectedUsers" && (
        <div className="VerificationStatus">
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">User</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rejectedUsers.slice(currentPageStatus * usersPerPage, (currentPageStatus + 1) * usersPerPage).map((user) => (
                <TableRow key={user.name}>
                  <TableCell className="tableCell">
                    <div className="approvedOrRejected">
                      <img src={user.img} alt="" className="requestImage" />
                      <div className="approvedOrRejectedInfo">
                        <span className="name">{user.name}</span>
                        <div className="info">
                          <span className='view' onClick={() => handleViewUserDetails(user)}>
                            View
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button className='rejectBtn'>Rejected</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      )}
        
      </div>
      {/* Render the UserDetailsPopup when selectedUser is not null */}
      {selectedUser && (
        <UserDetailsPopup user={selectedUser} onClose={handleClosePopup} />
      )}
    </div>
    </div>
  )
}

export default Verification;
