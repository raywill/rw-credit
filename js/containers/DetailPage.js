import React, {Component} from 'react'
import { connect } from 'react-redux'
import Redux  from 'redux'
import {History} from 'react-router'
import {Gallery, Divider, Slider, Panel, Button, Grid, Col} from 'amazeui-react'
import CreditHeader from '../components/CreditHeader'
import CreditFooter from '../components/CreditFooter'
import { fetchItemIfNeeded } from '../actions/actions'

export default class DetailPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    console.log("issued fetch item", dispatch);
    //console.log(this.props);
    dispatch(fetchItemIfNeeded());
    console.log("issued fetch item end");
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps;
    console.log("issued fetch item 2", dispatch);
  }



  render() {
    console.log(this.props);
    let { detailID } = this.props.params
    let { itemDetail } = this.props
    console.log("hoho", itemDetail, "Ho");

    var data = [
      'http://s.amazeui.org/media/i/demos/bing-1.jpg',
      'http://s.amazeui.org/media/i/demos/bing-2.jpg',
      'http://s.amazeui.org/media/i/demos/bing-3.jpg',
      'http://s.amazeui.org/media/i/demos/bing-4.jpg'
    ];
    let theme = 'b2';
    return (
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
                <div className="creditDetailTitle">马勒（MAHLE）机油滤清器/机滤OC593/4（速腾/POLO/迈腾/新宝来/朗逸/明锐/途安1.4T ） / {detailID}</div>
              </Col>
              <Col sm={4} md={3} lg={2}>
                <Button amStyle="warning" round onClick={() => this.props.history.push(null, '/detail/submit/' + detailID)}>我要兑换</Button>
              </Col>
            </Grid>
          </Panel>
          <Panel>
            {itemDetail.name || "nothing"}
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
