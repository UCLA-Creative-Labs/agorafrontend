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

    const columnData = [
      {'id': 'first_name', 'display': 'First Name'},
      {'id': 'last_name', 'display': 'Last Name'},
      {'id': 'year', 'display': 'Year'},
      {'id': 'resume', 'display': 'Resume', 'link': true},
      {'id': 'response', 'display': 'Response'}
    ];

    const dataArr = [
      {'first_name': 'Steven', 'last_name': 'La', 'year': 3, 'resume': 'https://drive.google.com/file/d/13pPVe7p-mRo0yD1YaFMt6y4mgb9BaRNu/view', 'response': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis erat, sit amet convallis augue aliquam ac. Integer vel tristique mi, eu mollis nisi. Quisque a dui sit amet turpis commodo interdum. Aliquam placerat congue nisi id bibendum. Nulla bibendum ex non dolor rutrum placerat. Fusce lobortis tempus neque, nec tincidunt leo. Aliquam et nisl luctus, accumsan quam at, maximus lectus. Proin ornare a diam fringilla elementum. Cras venenatis massa tortor, vel luctus leo condimentum eu. Phasellus sit amet leo ut eros tristique venenatis. Nulla facilisi. Integer eu ante congue libero posuere tincidunt.'},
      {'first_name': 'Michael', 'last_name': 'Yu', 'year': 3, 'resume': 'https://www.google.com'},
      {'first_name': 'Alex', 'last_name': 'Xu', 'year': 2, 'resume': 'https://www.facebook.com'},
      {'first_name': 'Bryan', 'last_name': 'Wong', 'year': 3, 'resume': 'https://www.twitter.com'}
    ];

    return (
      <div style={aboutStyle}>
        <h1>about</h1>
        <Grid columns={columnData} data={dataArr}/>
      </div>
    );
  }
}

export default About;