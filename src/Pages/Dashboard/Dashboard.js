import React from "react";
import DBOne from "./DashboadBody1/DBOne";
import DBBanner from "./DashboardBanner/DBBanner";

const Dashboard = () => {
  return (
    <div>
      <DBBanner></DBBanner>
      <DBOne></DBOne>
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
