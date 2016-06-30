import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../components/Welcome';
import '../assets/sass/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'My React App!' };
  }

  render() {
    return <Welcome text={this.state.text} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
