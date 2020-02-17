import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/index.css';

// import App from './App';
// import View from './view/view.js';

import * as serviceWorker from './serviceWorker';

// const element = 'an.travan';
// function test(params) {
//   return params;
// }
// const h1 = (<h1>{element + ' ' + test('abc')}</h1>)

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState_1: 'Tran',
      inputState_2: 'An',
      inputState_3: '3',
      listItems: [
        { id: 1, name: 'Tran' },
        { id: 2, name: 'an' },
        { id: 3, name: 'Tan' },
        { id: 4, name: 'ran' },
      ],
      value: 10,
      data: 0
    }
    this.handleOnchange = this.handleOnchange.bind(this);
  };

  handleSubmit() {
    console.log('console.log-1');
  };

  handleOnchange(e) {
    this.setState({
      demoDataReact: e.target.value,
    });

    setTimeout(() => {
      this.setState({
        value: this.state.demoDataReact,
      });
    }, 10);
  };

  render() {
    return (
      // <table className="table-react">
      //   <thead>
      //     <tr>
      //       <th>{this.state.value}</th>
      //       <th>{this.state.value}</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {this.state.listItems.map((list) =>
      //       <tr key={list.id}>
      //         <td>{list.name}</td>
      //         <td>{list.name.toUpperCase()}</td>
      //       </tr>
      //     )}
      //   </tbody>
      // </table>

      
      <div>
        <input className="input-react" name="demoDataReact" value={this.state.value} onChange={this.handleOnchange}></input>
        <p>{this.state.value}</p>
      </div>
      // <form onSubmit={this.handleSubmit}>
      //   <label> Name: </label>
      //   <input type="text" defaultValue={this.state.value} />
      //   <input type="submit" value="Submit" />
      // </form>
    );
  }
}

ReactDOM.render(<Welcome name="An" />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
