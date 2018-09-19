import React from "react";

import Row from "../../components/Row";
import { USERS } from "../../config/config";
import ApplicationsTable from "../../components/ApplicationsTable";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columnArr = [
      { id: "first_name", display: "First Name" },
      { id: "last_name", display: "Last Name" },
      { id: "year", display: "Year" },
      { id: "resume", display: "Resume", link: true }
    ];

    const dataArr = [
      {
        first_name: "Steven",
        last_name: "La",
        year: 3,
        resume: "https://github.com/"
      },
      {
        first_name: "Michael",
        last_name: "Yu",
        year: 3,
        resume: "https://www.google.com"
      },
      {
        first_name: "Alex",
        last_name: "Xu",
        year: 2,
        resume: "https://www.facebook.com"
      },
      {
        first_name: "Bryan",
        last_name: "Wong",
        year: 3,
        resume: "https://www.twitter.com"
      }
    ];

    return (
      <div>
        <h1>Dashboard</h1>
        <ApplicationsTable columns={columnArr} data={dataArr} />
      </div>
    );
  }
}

export default Dashboard;
