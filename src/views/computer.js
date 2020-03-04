import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { bindActionCreators } from 'redux';

class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  };

  UNSAFE_componentWillMount() {
    let self = this;
    axios.get('http://localhost:8000/api/get-data-computer').then(function (response) {
      self.setState({ data: response.data });

      self.props.dataSony.splice(0, self.props.dataSony.length);
      response.data.forEach(dataEle => {
        self.props.dataSony.push(dataEle);
      });
      setDataComputer(self.props.dataSony);

    }).catch(function (error) {
      console.log(error);
    })
  };

  render() {
    return (
      <div className="text-center container">
        <table className="table table-hover table-react">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TYPE</th>
              <th scope="col">NAME</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  };

  renderList() {
    return this.state.data.map((sony) => {
      return (
        <tr key={sony.id}>
          <td> {sony.id} </td>
          <td> {sony.type} </td>
          <td> {sony.name} </td>
        </tr>
      );
    });
  };
};

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

export default connect(mapStateToProps, matchDispatchToProps)(Computer);