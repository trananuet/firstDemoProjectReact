import React, { Component } from 'react';
// import { setDataComputer } from '../actions/setDataComputer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AddDataComputer extends Component {
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
    let self = this;
    let data = {
      type: self.inputTagForm.typeSony.value.trim(),
      name: self.inputTagForm.nameSony.value.trim(),
    };
    
    axios.post('http://localhost:8000/api/create-data-computer', data).then(function (response) {
      self.props.history.push('/Computer');
    }).catch(function (error) {
      console.log(error);
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataSony: state.computers.dataSony
  }
}

export default connect(mapStateToProps)(withRouter(AddDataComputer));