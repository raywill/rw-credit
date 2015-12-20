import React, {Component} from 'react'
import { connect } from 'react-redux'

export default class AppFramework extends Component {
  render() {
    const { content } = this.props
    console.log("AppFramework, props", this.props.dispatch);
    return (
      <div>
          { content }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AppFramework);
