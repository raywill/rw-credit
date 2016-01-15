import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Navbar, Header, Gallery, Divider, Modal} from 'amazeui-react'
import { Link } from 'react-router'
import CreditHeader from '../components/CreditHeader'
import CreditFooter from '../components/CreditFooter'
import { fetchListIfNeeded } from '../actions/actions'

export default class ListPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    console.log("issued fetch list", dispatch);
    dispatch(fetchListIfNeeded());
    console.log("issued fetch list end");
  }

  render() {
    let { itemList } = this.props
    var shopItemData = itemList;
    /*
    var shopItemData = itemList.map(data => {
      link : "#/detail/" + data.id,
      img : data.img,
      title : "title",
      desc : '💰' + '119'
    });
    */
    console.log(shopItemData);

    var old_shopItemData = [
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        "link": "#/detail/119",
        "title": "远方 有一个地方 那里种有我们的梦想",
        "desc": '💰' + '119'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
        "link": "#/detail/37",
        "title": "某天 也许会相遇 相遇在这个好地方",
        "desc": '💰' + '37'
      },
      {
        "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
        "link": "#/detail/36",
        "title": "不要太担心 只因为我相信",
        "desc": '💰' + '36'
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
      }

    ];

    var modal = <Modal type="loading" title="正在加载..." />;

    return (
     null == itemList ? modal :
      <div>
        <CreditHeader />
        <div style={{marginBottom: '50px'}}>
          <Gallery data={shopItemData} />
          <Link to="detail/123123">GoTo</Link>
        </div>
        <CreditFooter />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(ListPage);
