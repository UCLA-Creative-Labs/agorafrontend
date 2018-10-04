import React from "react";
import ApplicationsTable from "../../components/ApplicationsTable";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const choiceOptions = [
      { label: "Synaesthetic", value: "Synaesthetic" },
      { label: "Finding Home", value: "Finding Home" },
      { label: "Agora", value: "Agora" }
    ];

    return (
      <div>
        <h1>Dashboard</h1>
        <ApplicationsTable choiceOptions={choiceOptions} />
      </div>
    );
  }
}

export default Dashboard;
