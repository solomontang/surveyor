import React from 'react'
import { Checkbox, Form, Input, Select } from 'semantic-ui-react'
import axios from 'axios'

const options = [
  { key: 0, text: 'Follow-up Call', value: 'followUpCall' },
  { key: 1, text: 'Follow-up Email', value: 'followUpEmail' },
  { key: 2, text: 'Phone Screen', value: 'phoneScreen' },
  { key: 3, text: 'Phone Interview', value: 'phoneInterview' },
  { key: 4, text: 'Teleconference', value: 'teleconference' },
  { key: 5, text: 'Onsite Interview', value: 'onsiteInterview' },
  { key: 6, text: 'Job Test', value: 'Job Test' },
  { key: 7, text: 'Informational Interview', value: 'informationalInterview' },
];

class AppActionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '2017-08-11',
      completed: false,
      type: 'Followup Email',
      contact: 'some@body.com',
      username: props.username
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //
  }

  handleSubmit(e) {
    console.log('AppActionForm handleSubmit() e:', e, '\ne.target.value:', e.target.value);
    axios.post(`/api/users/${this.props.username}/jobs/action`, this.state);
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Due Date' placeholder={'2001-01-01'} />
          <Form.Select label='Action to Take' options={options} placeholder='action' />
          <Form.Input label='Contact Info' placeholder='contact info' />
        </Form.Group>
        <Form.Button onClick={this.handleSubmit} fluid color='blue' >Schedule an Action</Form.Button>
      </Form>
    );
  }
}

export default AppActionForm;
