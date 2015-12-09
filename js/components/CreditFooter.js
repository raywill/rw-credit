import React, {Component} from 'react'
import {Navbar} from 'amazeui-react'

export default class CreditFooter extends Component {
  render() {
    let bottomNavData = [
      {
        title: '客服电话',
        link: 'tel:13426199122',
        icon: 'phone'
      },
      {
        title: '兑换商品',
        link: '#/list',
        icon: 'github'
      },
      {
        title: '商品列表',
        link: '#/list',
        icon: 'download'
      },
      {
        title: '商品列表',
        link: '#/list',
        icon: 'location-arrow'
      }
    ];
    return (
      <div>
        <Navbar data={bottomNavData} />
      </div>
    );
  }
}
