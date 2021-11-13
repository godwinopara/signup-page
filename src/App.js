// import React from "react";
import React, { Component } from "react";
import Form from "./components/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials
            is great, but understanding how developers think is invaluable.
          </p>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
