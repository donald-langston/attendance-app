import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AttendanceApp from '../src/reducers/reducer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayStudents from '../src/components/Students';
import Home from '../src/components/Home';
import StudentsTable from '../src/components/StudentsTable';
import ModalDialog from '../src/components/ModalDialog';
import Search from '../src/components/Search';
import DisplayTables from '../src/components/DisplayTables';
const store = createStore(AttendanceApp, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/">
        <div>
          <Home />
          <div style={{display: "flex"}}>
          <ModalDialog />
          <Search />
          </div>
        </div>
      </Route>
      <Route path="/students">
          <DisplayStudents />
      </Route>
      <Route path="/students/:table">
        <DisplayStudents />
      </Route>
      <Route path="/studentstable">
        <StudentsTable />
      </Route>
      <Route path="/displaytables/:tables">
        <DisplayTables />
      </Route>
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
