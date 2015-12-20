import React, {Component, PropTypes} from 'react'
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router'


import ListPage from '../containers/ListPage'
import DetailPage from '../containers/DetailPage'
import FormPage from '../containers/FormPage'
import AppFramework from '../containers/AppFramework'


export default (
  <Route path="/rw-credit/" component={AppFramework} >
    <Route path="list" components={ {content : ListPage} } />
    <Route path="detail/:detailID" components={ {content : DetailPage} } />
    <Route path="detail/submit/:detailID" components={ {content : FormPage} } />
  </Route>
);


