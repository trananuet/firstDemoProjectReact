import React from 'react';
// import { connect } from 'react-redux';

class Wiless extends React.Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);

    this.state = {
      typeSony: '',
      nameSony: ''
    };

    this.inputTagForm = {
      typeSony: '',
      nameSony: '',
    }


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

  handelClick({ dispatch }) {
    this.setState({
      typeSony: this.inputTagForm.typeSony.value.trim(),
      nameSony: this.inputTagForm.nameSony.value.trim(),
    });

    // function mapDispatchToProps(dispatch) {
    //   return bindActionCreators({addFriendAction}, dispatch)
    // }
    // let data = {
    //   typeSony: this.inputTagForm.typeSony.value.trim(),
    //   nameSony: this.inputTagForm.nameSony.value.trim(),
    // }
    // addDataSony(data);

    // dispatch(addDataSony(data));
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => dispatch({ type: 'ADD_DATA' })
//   }
// }


// function addDataSony(data) {
//   return {type: 'ADD_DATA', data: data}
// }

// export default connect()(Wiless);
export default Wiless;