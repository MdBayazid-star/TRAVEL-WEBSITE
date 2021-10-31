import React from "react";
import DBOne from "./DashboadBody1/DBOne";
import DBBanner from "./DashboardBanner/DBBanner";
import DBTwo from "./DashboardBody2/DBTwo";
import BDThree from "./DashboardBody3/BDThree";

const Dashboard = () => {
  return (
    <div>
      <DBBanner></DBBanner>
      <DBOne></DBOne>
      {/* <DBTwo></DBTwo> */}
      <BDThree></BDThree>
    </div>
  );
};

export default Dashboard;
