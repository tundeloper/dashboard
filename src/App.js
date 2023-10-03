import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

// =====screens ==========
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Transactions from "./pages/transactions/Transactions";
import Tutorials from "./pages/Tutorials/Tutorials";
import Analytics from "./pages/Analytics/Analytics";
import UsersList from "./pages/usersList/UsersList";
import ProfileDetails from "./pages/profile/ProfileDetails";
// import Profile from "./pages/profile/Profile";
import New from "./pages/new/New";
import Rates from "./pages/Rates/Rates";
import Verification from "./pages/Verification/Verification";
import SalesAnalytics from "./pages/SalesAnalytics/SalesAnalytics";
import Settings from "./pages/settings/Settings";
import Post from "./pages/Posts/Post";
import UserProfile from "./pages/UserProfile/UserProfile";
import CreateNew from "./pages/Posts/CreateNew";
import RateAlerts from "./pages/rateAlerts/RateAlerts";
import AllReferrals from "./pages/referrals/AllReferrals";


function App() {
  const { darkMode } = useContext(DarkModeContext);




  
  const contentStyles = {
    marginLeft: "200px", // Adjust this value to match the width of your sidebar
    padding: "20px",
    // Add any other styling you need
  };

  const wrapperStyles = {
    marginTop: "50px", 
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Sidebar />

        <div style={contentStyles}>
          <Navbar />

          <div style={wrapperStyles}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />

              <Route path="users">
                <Route index element={<UsersList />} />
                
                {/* <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                /> */}
              </Route>
              <Route path="profile/:userId" element={<ProfileDetails/>} />
              <Route
                  path="add-new-user"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              <Route path="Profile" element={<UserProfile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="Transactions" element={<Transactions />} />
              <Route path="Tutorials" element={<Tutorials />} />
              <Route path="Analytics" element={<Analytics />} />
              {/* <Route path="Profile" element={<Profile />} /> */}
              <Route path="Verification" element={<Verification />} />
              <Route path="Rates" element={<Rates />} />
              <Route path="sales-analytics" element={<SalesAnalytics />} />
              <Route path="post" element={<Post />} />
              <Route path="create-new-post" element={<CreateNew />} />
              <Route path="rate-alerts" element={<RateAlerts />} />
              <Route path="referrals" element={<AllReferrals />} />
            </Routes>
           </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
