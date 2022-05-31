import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
  render () {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
          <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
          <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  login(accountElm, passwordElm) {
    dispatch(actionCreators.login(accountElm.value, passwordElm.value))
  }
});


export default connect(null, mapDispatch)(Detail);