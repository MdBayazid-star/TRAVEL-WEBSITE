import React from "react";
import DBOne from "./DashboadBody1/DBOne";
import DBBanner from "./DashboardBanner/DBBanner";
import DBTwo from "./DashboardBody2/DBTwo";

const Dashboard = () => {
  return (
    <div>
      <DBBanner></DBBanner>
      <DBOne></DBOne>
      <DBTwo></DBTwo>
    </div>
  );
};

export default Dashboard;
