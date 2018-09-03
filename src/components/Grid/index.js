import React from 'react';
import PropTypes from 'prop-types';
import Table from 'rc-table';
import 'rc-table/assets/index.css';

/*
	Grid for viewing submitted applications.

	Props:
	- columns (ARRAY OF OBJECTS): Sets the headers for the grid. Example format:
	[{'id': 'first_name', 'display': 'First Name'}, {'id': 'last_name', 'display': 'Last Name'}, ...]
	If you want to include links as data, make sure you set ('link': true) inside of your respective column,
	i.e.: {'id': 'resume', 'display': 'Resume', 'link': true}
	Then, in your corresponding data, you'd just have a field like: {'resume': 'www.google.com'}

	- data (ARRAY OF OBJECTS): Sets the data for the grid. Example format (extended from 'columns' example):
	[{'first_name': 'Steven', 'last_name': 'La'}, {'first_name': 'Alex', 'last_name': 'Xu'}, ...]
*/

class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			data: []
		};

		this.addHeaders = this.addHeaders.bind(this);
		this.addData = this.addData.bind(this);
	}

	addHeaders() {
		const {columns} = this.props;
		for (let i = 0; i < columns.length; i++) {
			const temp = {};
			temp.dataIndex = columns[i].id;
			temp.key = columns[i].id;
			temp.title = columns[i].display;
			if (columns[i].link) {
				temp.render = function(text) {
					const linkDisplay = text ? 'Link' : '';
					return (
					<a href={text}>
						{linkDisplay}
					</a>);
				};
			}
			this.state.columns.push(temp);
		}
	}

	addData() {
		const {data} = this.props;
		for (let i = 0; i < data.length; i++) {
			const temp = data[i];
			temp.key = i;
			this.state.data.push(temp);
		}
	}

	render() {
		this.addHeaders();
		this.addData();
		return (
			<Table
				columns={this.state.columns}
				data={this.state.data}
			/>
		);
	}
}

Grid.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object),
	data: PropTypes.arrayOf(PropTypes.object),
};

export default Grid;