import React, {Component} from 'react'
import {Panel, Button, Form, Input} from 'amazeui-react'
import CreditHeader from '../components/CreditHeader'
// import CreditFooter from '../components/CreditFooter'

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <CreditHeader />
        <Form  style={ {padding: '20px'} } >
          <Input placeholder="用户名" icon="user" />
          {'\u00a0'}
          <Input placeholder="密码" icon="lock" />
          {'\u00a0'}
          <Input type="submit" amStyle="primary" value="登录" standalone/>
        </Form>
      </div>
    );
  }
}
