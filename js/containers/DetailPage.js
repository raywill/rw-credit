import React, {Component} from 'react'
import { connect } from 'react-redux'
import Redux  from 'redux'
import {Link} from 'react-router'
import {Gallery, Divider, Slider, Panel, Button, Grid, Col, Modal, ModalTrigger} from 'amazeui-react'
import CreditHeader from '../components/CreditHeader'
import CreditFooter from '../components/CreditFooter'
import { fetchItemIfNeeded } from '../actions/actions'

export default class DetailPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    const { detailID } = this.props.params
    console.log("issued fetch item", dispatch);
    //console.log(this.props);
    dispatch(fetchItemIfNeeded(detailID));
    console.log("issued fetch item end");
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps;
    console.log("issued fetch item 2", dispatch);
  }



  render() {
    let { detailID } = this.props.params
    let { itemDetail } = this.props

    var data = [
      'http://s.amazeui.org/media/i/demos/bing-1.jpg',
      'http://s.amazeui.org/media/i/demos/bing-2.jpg',
      'http://s.amazeui.org/media/i/demos/bing-3.jpg',
      'http://s.amazeui.org/media/i/demos/bing-4.jpg'
    ];
    let theme = 'b2';

    var modal = <Modal type="loading" title="正在加载..." />;

    return (
     null == itemDetail ? modal :
      <div>
        <CreditHeader />
        <div style={{marginBottom: '50px'}}>
          <Slider theme={theme} slideSpeed={3000} >
          {data.map(function(item, i) {
            return (
              <Slider.Item key={i}>
              <img src={item} />
              </Slider.Item>
            );
          })}
          </Slider>
          <Panel>
            <Grid className="doc-g">
              <Col sm={8} md={9} lg={10}>
                <div className="creditDetailTitle">{itemDetail.title}</div>
              </Col>
              <Col sm={4} md={3} lg={2}>
              <Link to={`/detail/submit/${detailID}`} activeClassName="active">
                <Button amStyle="warning" round>我要兑换</Button>
              </Link>
              </Col>
            </Grid>
          </Panel>
          <Panel>
            <div className="contentContainer" dangerouslySetInnerHTML={{__html: itemDetail.content || "这家伙很懒，什么都没写..." }} />
          </Panel>
        </div>
        <CreditFooter />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(DetailPage);
