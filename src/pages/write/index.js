import React, { PureComponent } from "react";
import { Redirect } from'react-router-dom';
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Write extends PureComponent {
  
  render () {
    const { loginSatus } = this.props;
    if (loginSatus) {
      return (
        <div></div>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state) => {
  loginSatus: sate.getIn(['login', 'login'])
}



export default connect(mapState, null)(Detail);