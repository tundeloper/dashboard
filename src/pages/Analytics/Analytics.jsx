import React, { useEffect } from "react";
import "./analytics.scss";
import UsersChart from "../../components/UsersChart/UsersChart";
import { userAnalysis } from "../../utils/fetch";

function Analytics() {
  // const data = async () => {
  //   try {
  //     const response = await userAnalysis();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   data();
  // }, []);
  return (
    <div className="analyticsContainer">
      {/* ====users analytics============= */}
      <div className="UserAnalytics">
        <span className="usersAnalyticsText">New Users Analytics</span>
        <div className="chartAnalytics">
          <UsersChart />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
