import React from "react";
import ApplicationsTable from "../../components/ApplicationsTable";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ApplicationsTable />
      </div>
    );
  }
}

export default Dashboard;
