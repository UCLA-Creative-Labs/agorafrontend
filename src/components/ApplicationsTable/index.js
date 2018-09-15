import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";
import Select from "react-select";

class ApplicationsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns, data, yearOptions, choiceOptions } = this.props;
    return (
      <div>
        <Select options={yearOptions} isMulti />
        <Select options={choiceOptions} isMulti />
        <Grid columns={columns} data={data} />
      </div>
    );
  }
}

ApplicationsTable.propTypes = {
  choiceOptions: PropTypes.arrayOf(PropTypes.object),
  yearOptions: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ApplicationsTable;
