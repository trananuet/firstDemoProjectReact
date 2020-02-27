import React, { Component } from 'react';
// import { setDataComputer } from '../actions/setDataComputer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

class Wiless extends Component {
  constructor() {
    super();
    this.handelClick = this.handelClick.bind(this);
    this.inputTagForm = {
      typeSony: '',
      nameSony: '',
    };

    this.state = {
      id: 2,
      redirect: false,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="form-group col-6 mt-5">
          <label className="label-form">Type</label>
          <input className="form-control" name="typeSony" placeholder="enter the data" ref={(input) => this.inputTagForm.typeSony = input}></input>
        </div>
        <div className="form-group col-6">
          <label className="label-form">Name</label>
          <input className="form-control" name="nameSony" placeholder="enter the data" ref={(input) => this.inputTagForm.nameSony = input}></input>
        </div>
        <button className="btn ml-3 btn-primary" onClick={this.handelClick}>
          Blem Blem
        </button>
      </div>
    );
  }

  handelClick() {
    let { dataSony } = this.props;
    let { id } = dataSony[dataSony.length - 1];

    let data = {
      id: id + 1,
      type: this.inputTagForm.typeSony.value.trim(),
      name: this.inputTagForm.nameSony.value.trim(),
    };

    this.props.dataSony.push(data);
    setDataComputer(this.props.dataSony);
    this.props.history.push('/Computer');
  }
}

const setDataComputer = (data) => {
  return {
    type: 'SET_DATA_COMPUTER',
    payload: data
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    dataSony: state.computers.dataSony
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setDataComputer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Wiless));