import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowerRouter, Router} from 'react-router-dom';
import Header from "./common/header";
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header/>
            <BrowerRouter>
              <div>
                <Route path='/' exact component={Home}>home</Route>
                <Route path='/detail' exact component={Detail}>detail</Route>
              </div>
            </BrowerRouter>
          </div>
        </Provider>
      </div>
    )
  }
}

export default App;
