import React, { Component } from "react";
import { WriterWarpper } from '../style';
import { connect } from 'react-redux';

class Writer extends Component {
  render () {
    return (
      <WriterWarpper>writer</WriterWarpper>
    )
  }
}

const mapState = (state) => {

}

export default connect(mapState)(Writer);