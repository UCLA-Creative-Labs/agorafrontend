import React from "react";
import Grid from "../Grid";
import Select from "react-select";

/*
  Container for applications grid and filtering options.

  -Props are the same as those of Grid component.
  -Currently only supports "Filter by year" and "Filter by choices".
*/

class ApplicationsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const yearPlaceholder = "Filter by year";
    const choicePlaceholder = "Filter by choices";

    const choiceOptions = [
      { value: "firstChoice", label: "1" },
      { value: "secondChoice", label: "2" },
      { value: "thirdChoice", label: "3" }
    ];

    const yearOptions = [
      { value: "firstYear", label: "1" },
      { value: "secondYear", label: "2" },
      { value: "thirdYear", label: "3" },
      { value: "fourthYear", label: "4" },
      { value: "fifthYear", label: "5+" }
    ];

    const columns = [
      { id: "first_name", display: "First Name" },
      { id: "last_name", display: "Last Name" },
      { id: "year", display: "Year" },
      { id: "resume", display: "Resume", link: true }
    ];

    const data = [
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
        <Select placeholder={yearPlaceholder} options={yearOptions} isMulti />
        <Select
          placeholder={choicePlaceholder}
          options={choiceOptions}
          isMulti
        />
        <Grid columns={columns} data={data} />
      </div>
    );
  }
}

export default ApplicationsTable;
