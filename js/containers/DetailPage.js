import React, {Component} from 'react'
import {Navbar, Header, Gallery, Divider} from 'amazeui-react'

export default class DetailPage extends Component {
  render() {
    let { detailID } = this.props.params
    return (
      <div>
        <div>{detailID}</div>
      </div>
    );
  }
}
