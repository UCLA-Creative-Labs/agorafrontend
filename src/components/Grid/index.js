import React from "react";
import PropTypes from "prop-types";
import Table from "rc-table";
import "rc-table/assets/index.css";

/*
	Grid for viewing submitted applications.

	Props:
	- columns (ARRAY OF OBJECTS): Sets the headers for the grid. Example format:
	[{'id': 'first_name', 'display': 'First Name'}, {'id': 'last_name', 'display': 'Last Name'}, ...]
	If you want to include links as data, make sure you set ('link': true) inside of your respective column,
	i.e.: {'id': 'resume', 'display': 'Resume', 'link': true}
	Then, in your corresponding data, you'd just have a field like: {'resume': 'www.google.com'}

	- data (ARRAY OF OBJECTS): Sets the data for the grid. Example format (extended from 'columns' example):
	[{'first_name': 'Steven', 'last_name': 'La', 'id': '4086381'}, {'first_name': 'Alex', 'last_name': 'Xu', 'id': '1649862'}, ...]
	Note that an 'id' field is required.
*/

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addHeaders = this.getHeaders.bind(this);
    this.addData = this.getData.bind(this);
  }

  getHeaders() {
    const { columns } = this.props;
    const result = [];
    columns.forEach(function(column) {
      const temp = {};
      temp.dataIndex = column.id;
      temp.key = column.id;
      temp.title = column.display;
      if (column.link) {
        temp.render = function(text) {
          const linkDisplay = text ? "Link" : "";
          return <a href={text}>{linkDisplay}</a>;
        };
      }
      result.push(temp);
    });
    return result;
  }

  getData() {
    const { data } = this.props;
    const result = [];
    data.forEach(function(dataEntry) {
      const temp = dataEntry;
      temp.key = dataEntry.id;
      result.push(temp);
    });
    return result;
  }

  render() {
    const columns = this.getHeaders();
    const data = this.getData();
    return <Table columns={columns} data={data} />;
  }
}

Grid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Grid;
