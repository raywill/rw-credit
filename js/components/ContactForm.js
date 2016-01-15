import React, {Component} from 'react'
import {Popover, Panel, Button, Form, Input, Grid, Col} from 'amazeui-react'

export default class ContactForm extends Component {

  handleChange(e) {
    // mute
  }

  render() {
    const {
      handleChanges,
    //  inputList,
      isInputValid
    } = this.props;

    var inputList = [
      {
        "placeholder" : "真实姓名",
        "icon" : "user",
        "defaultValue" : "晓楚",
        "validation" : "success",
        "value" : "hello"
      },
      {
        "placeholder" : "真实姓名",
        "icon" : "phone",
        "defaultValue" : "132xxxxxxxx",
        "validation" : "warning",
        "value" : "13222222222"
      },
      {
        "placeholder" : "邮寄地址",
        "icon" : "home",
        "defaultValue" : "北京",
        "validation" : null,
        "value" : null
      },
      {
        "placeholder" : "备注",
        "icon" : null,
        "defaultValue" : "叮嘱一句",
        "validation" : null,
        "value" : null
      }
    ];
    var inputListElements = inputList.map((item,key) => (
        <Input placeholder={item.placeholder} icon={item.icon} defaultValue={item.defaultValue}
          key={key} value={item.value} validation={item.validation} onChange={this.handleChange} />
    ));
    return (
      <div>

        <p style={ {fontSize: '0.8em', textAlign : 'center' , padding: '80px 0px 0px 0px', color : 'gray' } }>请认真填写收件人信息，客服人员会与你联系</p>

        <Form  style={ {padding: '20px'} } >
          {inputListElements}
        </Form>

        <Button type="submit" amStyle="warning" amSize="xl" style={ {position: 'fixed', bottom: '0px' } }  block disabled={!isInputValid}>兑换</Button>
      </div>
    );
  }
}
