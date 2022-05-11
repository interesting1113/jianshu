import React, { PureComponent } from "react";
import { WriterWarpper } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
  render () {
    return (
      <WriterWarpper>writer</WriterWarpper>
    )
  }
}

const mapState = (state) => {

}

export default connect(mapState)(Writer);