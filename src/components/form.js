import React from "react";
import Input from "./input";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // Get the type of input
    const inputType = e.target.name;
    const value = e.target.value;
    switch (inputType) {
      case "firstName":
        this.setState({ firstName: value });
        break;
      case "lastName":
        this.setState({ lastName: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      default:
        return;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // copy the input state from this.state

    const inputsState = { ...this.state };

    // get the keys from the inputsState
    const inputValue = Object.keys(inputsState);

    //Loop through the keys and display the error message
    // for input the are empty

    inputValue.forEach((key) => {
      const inputName = this.state[key];
      if (inputName === "") {
        // display the error message
        const errorMessages = document.querySelectorAll(`.${key}`);
        errorMessages.forEach((msg) => {
          msg.classList.add("show-error");
        });
      } else {
        // remove the error message
        const errorMessages = document.querySelectorAll(`.${key}`);
        errorMessages.forEach((msg) => {
          msg.classList.remove("show-error");
        });
        return;
      }
    });

    // check if all the input field are not empty
    const emptyInput = inputValue.filter((key) => {
      return inputsState[key] === "";
    });

    // if the input field are properly filled and not empty
    // clear the input field
    if (emptyInput.length === 0) {
      Object.keys(inputsState).forEach((key) => {
        inputsState[key] = "";
      });
      this.setState({ ...inputsState });
    }
  }

  render() {
    const formInputType = [
      {
        id: 1,
        type: "text",
        placeholder: "First Name",
        name: "firstName",
        value: this.state.firstName,
      },
      {
        id: 2,
        type: "text",
        placeholder: "Last Name",
        name: "lastName",
        value: this.state.lastName,
      },
      {
        id: 3,
        type: "email",
        placeholder: "Email Address",
        name: "email",
        value: this.state.email,
      },
      {
        id: 4,
        type: "password",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
      },
    ];

    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          {formInputType.map((input) => {
            return (
              <div key={input.id} className="input-wrapper">
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={this.handleChange}
                  name={input.name}
                />
                <div className={`error-img ${input.name}`}></div>
                <p
                  className={`error-message ${input.name}`}
                >{`${input.placeholder} can't be empty`}</p>
              </div>
            );
          })}
          <button type="submit">Clam your free trial</button>
          <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </>
    );
  }
}

export default Form;
