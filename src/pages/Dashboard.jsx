import React from "react";

import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/statusCard/StatusCard";

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">{/* Chart */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
