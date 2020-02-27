import React from 'react';
import { connect } from "react-redux";

class Computer extends React.Component {
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
    return this.props.dataSony.map((sony) => {
      return (
        <tr key={sony.id}>
          <td> {sony.id} </td>
          <td> {sony.type} </td>
          <td> {sony.name} </td>
        </tr>
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataSony: state.computers.dataSony
  }
}

export default connect(mapStateToProps)(Computer);