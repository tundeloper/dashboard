import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SKYSHOWNG</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <div className="scrollable-sidebar">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li> 
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
         
          <p className="title">POSTS</p>
          <Link to="/post" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>All posts</span>
            </li>
          </Link>
          <Link to="/create-new-post" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>  Create new</span>
            </li>
          </Link>
          <p className="title">ANALYTICS</p>
          <Link  to="/sales-analytics" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Sales Analytics</span>
            </li>
          </Link>
          <Link  to="/analytics" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Users Analytics</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/rates" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Rates</span>
          </li>
          </Link>
          <Link to="/rate-alerts" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Rate Alerts</span>
          </li>
          </Link>
          <Link to="/referrals" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Referrals</span>
          </li>
          </Link>
          <Link to="/tutorials" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Tutorials</span>
            </li>
          </Link>
          <Link to="/verification" style={{ textDecoration: "none" }}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Verifications</span>
            </li>
          </Link>
         
          <p className="title">PROFILE</p>
          <Link to="/Profile" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          <p className="title">SETTINGS</p>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" /> 
                  <span>Logout</span>
                </li>
          </Link>
        </ul>
        </div>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
