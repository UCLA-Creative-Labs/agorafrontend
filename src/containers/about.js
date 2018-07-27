import React from 'react';
import FormItem from '../components/FormItem';
import Form from '../components/Form';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutStyle = {
      margin: '4rem',
    };

    const optionsArr = ['What\'s your name?', 'How are you?'];
    function try_me() {
      console.log("HELLO!");
    }

    return (
      <div style={aboutStyle}>
        <h1>about</h1>

        <Form title="Board Application" description="Hi! Please, fill these questions out, and we'll get back to you ASAP :)" onSubmit={try_me}>
          <FormItem type="long_resp" title="Tell me about yourself." required={true} options={optionsArr}/>
          <FormItem type="short_resp" title="First name:" required={true} options={optionsArr}/>
          <FormItem type="checkbox" title="I understand the terms of this agreement." required={true} options={optionsArr}/>
          <FormItem type="bool" title="Do you want to donate a swipe?" required={true} options={optionsArr}/>
        </Form>

      </div>
    );
  }
}

export default About;
