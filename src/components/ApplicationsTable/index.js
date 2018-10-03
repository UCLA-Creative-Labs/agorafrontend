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
    this.state = {
      yearFilter: [],
      choiceFilter: []
    };

    this.filterYear = this.filterYear.bind(this);
    this.filterChoice = this.filterChoice.bind(this);
  }

  filterYear(selectedOption) {
    const temp = this.state.yearFilter.concat(
      selectedOption[selectedOption.length - 1].label
    );
    this.setState({ ...this.state, yearFilter: temp });
  }

  filterChoice(selectedOption) {
    const temp = this.state.choiceFilter.concat(
      selectedOption[selectedOption.length - 1].label
    );
    this.setState({ ...this.state, choiceFilter: temp });
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

    // hard-coded sample data --> need to make Table intelligent enough to fetch data on its own
    const columns = [
      { id: "name", display: "Name" },
      { id: "year", display: "Year" },
      { id: "choice", display: "Choice" },
      { id: "resume", display: "Resume", link: true },
      { id: "question_1", display: "Why do you want to join CL?" }
    ];

    const data = [
      {
        name: "Steven La",
        year: 3,
        choice: 1,
        resume: "https://github.com/",
        question_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ipsum neque. Sed mattis ligula in nunc tincidunt tempor. Suspendisse in venenatis tortor, ac viverra eros. Aliquam at imperdiet massa. Donec nec consequat diam. Cras ullamcorper leo eu nisl convallis, at blandit dui porta. Donec convallis nisi vitae tincidunt tristique. Integer aliquam auctor purus eget euismod. Etiam congue at risus sed viverra. Phasellus ultrices purus elit, vitae luctus dui auctor in. Vivamus aliquet pulvinar suscipit. Integer vel enim risus. Phasellus non lectus mi."
      },
      {
        name: "Michael Yu",
        year: 3,
        choice: 2,
        resume: "https://www.google.com",
        question_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ipsum neque. Sed mattis ligula in nunc tincidunt tempor. Suspendisse in venenatis tortor, ac viverra eros. Aliquam at imperdiet massa. Donec nec consequat diam. Cras ullamcorper leo eu nisl convallis, at blandit dui porta. Donec convallis nisi vitae tincidunt tristique. Integer aliquam auctor purus eget euismod. Etiam congue at risus sed viverra. Phasellus ultrices purus elit, vitae luctus dui auctor in. Vivamus aliquet pulvinar suscipit. Integer vel enim risus. Phasellus non lectus mi."
      },
      {
        name: "Alex Xu",
        year: 2,
        choice: 3,
        resume: "https://www.facebook.com",
        question_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ipsum neque. Sed mattis ligula in nunc tincidunt tempor. Suspendisse in venenatis tortor, ac viverra eros. Aliquam at imperdiet massa. Donec nec consequat diam. Cras ullamcorper leo eu nisl convallis, at blandit dui porta. Donec convallis nisi vitae tincidunt tristique. Integer aliquam auctor purus eget euismod. Etiam congue at risus sed viverra. Phasellus ultrices purus elit, vitae luctus dui auctor in. Vivamus aliquet pulvinar suscipit. Integer vel enim risus. Phasellus non lectus mi."
      },
      {
        name: "Bryan Wong",
        year: 3,
        choice: 2,
        resume: "https://www.twitter.com",
        question_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ipsum neque. Sed mattis ligula in nunc tincidunt tempor. Suspendisse in venenatis tortor, ac viverra eros. Aliquam at imperdiet massa. Donec nec consequat diam. Cras ullamcorper leo eu nisl convallis, at blandit dui porta. Donec convallis nisi vitae tincidunt tristique. Integer aliquam auctor purus eget euismod. Etiam congue at risus sed viverra. Phasellus ultrices purus elit, vitae luctus dui auctor in. Vivamus aliquet pulvinar suscipit. Integer vel enim risus. Phasellus non lectus mi."
      }
    ];
    // end of sample data

    return (
      <div>
        <Select
          placeholder={yearPlaceholder}
          options={yearOptions}
          isMulti
          onChange={this.filterYear}
        />
        <Select
          placeholder={choicePlaceholder}
          options={choiceOptions}
          isMulti
          onChange={this.filterChoice}
        />
        <Grid columns={columns} data={data} />
      </div>
    );
  }
}

export default ApplicationsTable;
