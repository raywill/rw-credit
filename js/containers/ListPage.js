import React, {Component} from 'react'
import {Navbar, Header, Gallery, Divider} from 'amazeui-react'
import { Link } from 'react-router'

export default class ListPage extends Component {
  render() {
    var shopItemData = [
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "#/detail/144",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "#/detail/144",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "#/detail/144",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "#/detail/144",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "#/detail/144",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "#/detail/144",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "#/detail/144",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "#/detail/144",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "#/detail/144",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },

      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "#/detail/144",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "#/detail/144",
        "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "title": "不要太担心 只因为我相信",
        "desc": '💰' + '144'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
        "link": "#/detail/144",
        "title": "终会走过这条遥远的道路",
        "desc": "2375-09-26"
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/144",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '144'
      },

    ];
    return (
      <div style={{marginBottom: '49px'}}>
        <Gallery data={shopItemData} />
        <Link to="detail/123123">GoTo</Link>
      </div>
    );
  }
}
