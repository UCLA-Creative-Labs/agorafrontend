import React from 'react';
import Grid from '../components/Grid';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutStyle = {
      margin: '4rem',
    };

    const columnData = [{'id': 'first_name', 'name': 'First Name'}, {'id': 'last_name', 'name': 'Last Name'}, {'id': 'year', 'name': 'Year'}];
    const dataArr = [{'id': 'first_name', 'name': 'Steven'}, {'id': 'last_name', 'name': 'La'}, {'id': 'year', 'name': '3'},
    {'id': 'first_name', 'name': 'Michael'}, {'id': 'last_name', 'name': 'Yu'}, {'id': 'year', 'name': '3'},
    {'id': 'first_name', 'name': 'Alex'}, {'id': 'last_name', 'name': 'Xu'}, {'id': 'year', 'name': '2'}];

    return (
      <div style={aboutStyle}>
        <h1>about</h1>
        <Grid columns={columnData} data={dataArr}/>
      </div>
    );
  }
}

export default About;