import React, {Component} from 'react'

export default class AppFramework extends Component {
  render() {
    const { content } = this.props
    console.log(this.props);
    return (
      <div>
          { content }
      </div>
    );
  }
}
