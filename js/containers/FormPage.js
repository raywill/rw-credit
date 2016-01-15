import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Panel, Button, Form, Input} from 'amazeui-react'
import ContactForm from '../components/ContactForm'

export default class FormPage extends Component {
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(FormPage);
