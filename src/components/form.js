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
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
        <form className="form">
          {formInputType.map((input) => {
            return (
              <Input
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={this.handleChange}
                name={input.name}
              />
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
