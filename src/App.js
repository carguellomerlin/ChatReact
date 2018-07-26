import React, { Component } from 'react';
import Login from './containers/LoginContainer'
import ChatRoom from './components/ChatRoom'
import {Switch,Route, withRouter} from 'react-router-dom'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route  path="/chatroom" component={ChatRoom}/>
          </Switch>

      </div>
    );
  }
}

export default App;
