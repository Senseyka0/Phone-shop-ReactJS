import React from "react";
import { NavLink } from "react-router-dom";

import "./Information.scss";

class Information extends React.Component {
  state = {
    family: "",
    name: "",
    phoneNumber: "",
    city: "",
    branch: "",

    formErrors: {
      family: "",
      name: "",
      phoneNumber: "",
      city: "",
      branch: "",
    },

    familyValid: false,
    nameValid: false,
    phoneNumberValid: false,
    cityValid: false,
    branchValid: false,
    formValid: false,
  };

  handleUserInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value }, () => {
      this.validateField(value, name);
    });
  };

  validateField = (value, fieldName) => {
    let fieldValidationErrors = this.state.formErrors;

    // let familyValid = this.state.familyValid;
    // let nameValid = this.state.nameValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    // let cityValid = this.state.cityValid;
    // let branchValid = this.state.branchValid;

    switch (fieldName) {
      case "phoneNumber":
        phoneNumberValid = value.match(/^\d+/);
        fieldValidationErrors.phoneNumber = phoneNumberValid
          ? ""
          : "Please only enter numeric characters! (Allowed input:0-9)";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        phoneNumberValid: phoneNumberValid,
      },
      this.validateForm
    );
  };

  render() {
    return (
      <div className="information">
        <h4>Your contact information</h4>
        <form className="information-form">
          <input
            type="text"
            name="family"
            value={this.state.family}
            onChange={this.handleUserInput}
            className="family"
            placeholder="Your family"
          />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleUserInput}
            className="name"
            placeholder="Your name"
          />
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput}
            className="phoneNumber"
            placeholder="Your telephone number"
          />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleUserInput}
            className="city"
            placeholder="Your city"
          />

          <input
            type="text"
            name="branch"
            value={this.state.branch}
            onChange={this.handleUserInput}
            className="mailAddress"
            placeholder="Your number of branch"
          />
        </form>

        <div className="error">
          {Object.keys(this.state.formErrors).map((error, i) => {
            return this.state.formErrors[error].length > 0 ? (
              <p key={i}>{this.state.formErrors[error]}</p>
            ) : (
              ""
            );
          })}
        </div>

        <div className="information-button">
          <button type="submit" className="continue">
            <NavLink to="/checkout/shipping">Continue to shipping</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Information;
