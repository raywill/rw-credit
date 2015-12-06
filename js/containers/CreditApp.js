import React, {Component} from 'react'
import {Navbar, Header, Gallery} from 'amazeui-react'

export default class CreditApp extends Component {
  render() {
    let topNavData = {
      "title" : '积分兑换',
      "link" : 'http://www.baidu.com',
      data  : {
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
        link: 'https://github.com/allmobilize/amazeui',
        icon: 'github'
      },
      {
        title: '下载使用',
        link: 'http://amazeui.org/getting-started',
        icon: 'download'
      },
      {
        title: 'Bug 反馈',
        link: 'https://github.com/allmobilize/amazeui/issues',
        icon: 'location-arrow'
      }
    ];
    var shopItemData = [
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      }
    ];
    return (
      <div className="doc-example">
        <Header {...topNavData} />
        <Gallery data={shopItemData} />
        <Navbar data={bottomNavData} />
      </div>
    );
  }
}
