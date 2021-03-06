import React, {Component} from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { connect, Provider } from 'react-redux'

import ListPage from './ListPage'
import DetailPage from './DetailPage'
import FormPage from './FormPage'
import AppFramework from './AppFramework'

export default class CreditApp extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
      <Router>
        <Route path="/" components={AppFramework}>
          <Route path="list" components={ {content : ListPage} }  />
          <Route path="detail/:detailID" components={ {content : DetailPage} } />
          <Route path="detail/submit/:detailID" components={ {content : FormPage} } />
          <IndexRoute components={ {content : ListPage} } />
        </Route>

      </Router>
      </Provider>
    );
  }
}
