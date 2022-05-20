import React, { Component } from "react";
import { connect } from "react-redux";
import { Content, DetailWrapper, Header} from './style';
import { actionCreators } from "./store";

class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{_html: this.props.content}}/>
        
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail
  }
}

const mapState = (state) => ({
  title: state.get(['detail', 'title']),
  content: state.get(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail());
  }
});


export default connect(mapState, mapDispatch)(Detail);