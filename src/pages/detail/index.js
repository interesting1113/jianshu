import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Content, DetailWrapper, Header} from './style';
import { actionCreators } from "./store";

class Detail extends PureComponent {
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
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.get(['detail', 'title']),
  content: state.get(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});


export default connect(mapState, mapDispatch)(withRouter(Detail));