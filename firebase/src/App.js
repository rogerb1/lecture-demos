import React, { Component } from 'react';

import SignUpForm from './SignUp';
import TaskApp from './Tasks';

class App extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
        {/* <TaskApp /> */}
      </div>
    );
  }
}

export default App;