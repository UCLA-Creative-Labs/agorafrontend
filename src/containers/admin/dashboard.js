import React from 'react';

import Row from '../../components/Row';
import { USERS } from '../../config/config';

class Dashboard extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div>
			<h1>Dashboard</h1>
			{USERS.map((user, i) => (
				<Row key={i}>
					{Object.keys(user).map((key, i) => (
						<p key={i} style={{flex: '1'}}>{user[key]}</p>
					))}
				</Row>
			))}
		</div>
	}
}

export default Dashboard;
