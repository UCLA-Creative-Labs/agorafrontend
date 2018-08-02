import React from 'react';
import PropTypes from 'prop-types';

class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	addHeaders(columnArr) {
		let buffer = [];
		for (var i = 0; i < columnArr.length; i++) {
			const curr = (
				<th key={i}>
					{columnArr[i]['name']}
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

	addData(dataArr, columnArr) {
		let buffer = [];
		for (var i = 0; i < dataArr.length;) {
			let curr = [];
			for (var j = 0; j < columnArr.length; j++) {
				const dataEntry = (
					<td key={i}>
						{dataArr[i++]['name']}
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
		const {columns, data} = this.props;
		return (
			<table>
				<tbody>
					{this.addHeaders(columns)}
					{this.addData(data, columns)}
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