// import React from "react";
import React, { Component } from "react";
import Form from "./components/form";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div className="container grid">
        <div className="signUp-details">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="form-wrapper">
          <div className="free-trial">
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
