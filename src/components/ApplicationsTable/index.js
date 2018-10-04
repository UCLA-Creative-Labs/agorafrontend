import React from "react";
import Grid from "../Grid";
import Select from "react-select";
import { connect } from "react-redux";
import { fetchApplications } from "../../actions/applications";

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
      choiceFilter: ""
    };

    this.filterYear = this.filterYear.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.filterChoice = this.filterChoice.bind(this);
  }

  filterYear(selectedOption) {
    const temp = [];
    for (let i = 0; i < selectedOption.length; i++) {
      temp.push(selectedOption[i].value);
    }
    this.setState({ ...this.state, yearFilter: temp });

    this.handleFilter();
  }

  filterChoice(selectedOption) {
    if (selectedOption.length === 0) return;
    this.setState({
      ...this.state,
      choiceFilter: selectedOption[selectedOption.length - 1].value
    });

    this.handleFilter();
  }

  handleFilter() {
    const { fetchApplications } = this.props;
    const temp = fetchApplications({
      years:
        this.state.yearFilter.length > 0 ? this.state.yearFilter : [1, 2, 3, 4],
      firstChoice:
        this.state.choiceFilter !== "" ? this.state.choiceFilter : undefined
    });
  }

  render() {
    const { choiceOptions } = this.props;
    const yearPlaceholder = "Filter by year";
    const choicePlaceholder = "Filter by choices";

    const yearOptions = [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 }
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

const mapDispatchToProps = dispatch => {
  return {
    fetchApplications: payload => dispatch(fetchApplications(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ApplicationsTable);
