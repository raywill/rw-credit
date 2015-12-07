import React, {Component} from 'react'
import {Navbar, Header } from 'amazeui-react'

export default class ListPage extends Component {
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

    let bottomNavData = [
      {
        title: '呼叫',
        link: 'tel:123456789',
        icon: 'phone'
      },
      {
        title: 'GitHub',
        link: '#/list',
        icon: 'github'
      },
      {
        title: '下载使用',
        link: '#/',
        icon: 'download'
      },
      {
        title: 'Bug 反馈',
        link: '#/list',
        icon: 'location-arrow'
      }
    ];
    const { content } = this.props
    console.log(content);
    return (
      <div>
        <Header {...topNavData} />
          { content || <div>Emtpy</div> }
        <Navbar data={bottomNavData} />
      </div>
    );
  }
}
