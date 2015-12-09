import React, {Component} from 'react'
import {Navbar, Header } from 'amazeui-react'

export default class CreditHeader extends Component {
  render() {
    let topNavData = {
      "title" : '积分兑换',
      "link" : 'http://www.baidu.com',
      data : {
      },
      datax  : {
        "left": [
          {
            "link": "#left-link",
            "icon": "home"
          }
        ],
        "right": [
          {
            "link": "#right-link",
            "icon": "bars"
          }
        ]
      }
    };

    return (
      <div>
        <Header {...topNavData} />
      </div>
    );
  }
}
