import React from "react";
import PropTypes from "prop-types";
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
    const { columns, data } = this.props;

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

ApplicationsTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ApplicationsTable;
