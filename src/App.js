import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowerRouter, Route} from 'react-router-dom';
import Header from "./common/header";
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <BrowerRouter>
              <div>
                <Header/>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowerRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
