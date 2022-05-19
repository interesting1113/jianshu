import React, { Component } from "react";
import { Content, DetailWrapper, Header} from './style';

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
}

const mapState = (state) => ({
  title: state.get(['detail', 'title']),
  content: state.get(['detail', 'content'])
});


export default connect(mapState, null)(Detail);