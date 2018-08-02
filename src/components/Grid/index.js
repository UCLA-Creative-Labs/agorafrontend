import React from 'react';
import PropTypes from 'prop-types';

/*
	Grid for viewing submitted applications.

	Props:
	- columns (ARRAY OF OBJECTS): Sets the headers for the grid. The format is like 
	[{'id': 'first_name', 'name': 'First Name'}, {'id': 'last_name', 'name': 'Last Name'}, ...]
	- data (ARRAY OF OBJECTS): Sets the data for the grid. The format is like
	[{'id': 'first_name', 'name': 'Steven'}, {'id': 'last_name', 'name': 'La'}, ...]
*/

class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.addHeaders = this.addHeaders.bind(this);
		this.addData = this.addData.bind(this);
	}

	addHeaders() {
		const {columns} = this.props;
		let buffer = [];
		for (var i = 0; i < columns.length; i++) {
			const curr = (
				<th key={i}>
					{columns[i]['name']}
				</th>
			);
			buffer.push(curr);
		}
		return (
			<tr>
				{buffer}
			</tr>
		);
	}

	addData() {
		const {columns, data} = this.props;
		let buffer = [];
		for (var i = 0; i < data.length;) {
			let curr = [];
			for (var j = 0; j < columns.length; j++) {
				const dataEntry = (
					<td key={i}>
						{data[i++]['name']}
					</td>
				);
				curr.push(dataEntry);
			}
			const finalEntry = (
				<tr key={i}>
					{curr}
				</tr>
			);
			buffer.push(finalEntry);
		}
		return buffer;
	}

	render() {
		return (
			<table>
				<tbody>
					{this.addHeaders()}
					{this.addData()}
				</tbody>
			</table>
		);
	}
}

Grid.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object),
	data: PropTypes.arrayOf(PropTypes.object),
};

export default Grid;