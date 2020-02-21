import React from 'react';
import { connect } from "react-redux";

class Wifi extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h4>{this.props.type} {this.props.value}</h4>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch({ type: 'getData' })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    type: state.dataSony.type,
    value: state.dataSony.value
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wifi);