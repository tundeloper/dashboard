import "./home.scss";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from 'react-router-dom';
import HomeTransactionChart from "../../components/HomeCharts/HomeTransactionChart";


const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <div className="Widget">
            <div className="leftInner">
              <span className="widgetTitle">USERS</span>
              <span className="widgetAmount">100</span>
              <Link to="/users" className="widgetLink">See all users</Link>
            </div>
            <div className="RightInner">
              <span className="widgetPercentage">+20%</span>
              <span className="widgetIcon"><Person2OutlinedIcon/></span>
            </div>
          </div>
          <div className="Widget">
            <div className="leftInner">
              <span className="widgetTitle">TRANSACTIONS</span>
              <span className="widgetAmount">100</span>
              <span className="widgetLink">See all transactions</span>
            </div>
            <div className="RightInner">
              <span className="widgetPercentage">+20%</span>
              <span className="widgetIcon"><Person2OutlinedIcon/></span>
            </div>
          </div>
          <div className="Widget">
            <div className="leftInner">
              <span className="widgetTitle">EARNINGS</span>
              <span className="widgetAmount">100</span>
              <span className="widgetLink">See all users</span>
            </div>
            <div className="RightInner">
              <span className="widgetPercentage">+20%</span>
              <span className="widgetIcon"><Person2OutlinedIcon/></span>
            </div>
          </div>
        </div>
        <div className="GraphsContainer"> 
        <div className="OverralSalesContainer">
            <div className="OverralSales">
            <div className="PriceContainer">
              <div className="SalesAmount">
                <span className="NairaIcon">N</span>
                <span className="Amount">  100</span>
              </div>
            </div>
            <div className="BottomOverral">
              <span className="TotalSalesText">Total sales</span>
              <span className="TotalSalesLink">See sales analytics</span>
            </div>
          </div>
        </div>
        <div className="HomeGraph"> 
          <div className="SalesTextContainer">
              <span className="SalesChartText">Sales from the last 6 months</span>
          </div>
            <HomeTransactionChart/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
