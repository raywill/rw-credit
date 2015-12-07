import React, {Component} from 'react'
import { Router, Route } from 'react-router'

import ListPage from './ListPage'
import DetailPage from './DetailPage'
import AppFramework from './AppFramework'

export default class CreditApp extends Component {
  render() {
    return (
      <Router>
        <Route path="/" components={AppFramework}>
          <Route path="list" components={ {content : ListPage} }  />
          <Route path="detail/:detailID" components={ {content : DetailPage} } />
          <Route path="*" components={ {content : ListPage} } />
        </Route>
      </Router>
    );
  }
}
