import React, {Component} from 'react'
import {Navbar} from 'amazeui-react'

export default class CreditFooter extends Component {
  render() {
    let bottomNavData = [
      {
        title: '兑换商品',
        link: '#/list',
        icon: 'cube'
      },
      {
        title: '限时活动',
        link: '#/list',
        icon: 'clock-o'
      },
      {
        title: '我的兑换',
        link: '#/cart',
        icon: 'circle-o'
      }
    ];
    return (
      <div>
        <Navbar data={bottomNavData} />
      </div>
    );
  }
}
