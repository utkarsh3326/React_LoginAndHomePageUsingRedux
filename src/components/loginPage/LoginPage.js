import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Input from "./LoginInput";

import { InputData, UserData } from "../../utility/Data";
import { submitHandler } from "../../actions/index";

import "../../App.css";

class LoginPage extends React.Component {
  // for checking credentials and jump to home page
  onSubmitHandler(e, email, password) {
    e.preventDefault();
    if (email === UserData.email && password === UserData.password) {
      this.props.history.push("/homePage");
    } else {
      this.props.submitHandler(e, email, password);
    }
  }

  // for returning login input field
  loginInputField() {
    let inputFieldData = InputData.map((input) => {
      return (
        <Input
          className={input.className}
          name={input.name}
          key={input.name}
          placeholder={input.placeholder}
          type={input.type}
        />
      );
    });
    return inputFieldData;
  }

  render() {
    const { buttonState, errorMessage, email, password } = this.props;
    const buttonStyle = !buttonState ? { backgroundColor: "green" } : null;

    return (
      <div className="login-page">
        <form
          className="login-form"
          onSubmit={(e) => this.onSubmitHandler(e, email, password)}
        >
          {this.loginInputField()}
          <input
            className="login-form-button"
            disabled={buttonState}
            style={buttonStyle}
            type="submit"
            value="Login"
          />
        </form>
        <p className="error-message">{errorMessage}</p>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  jumpToHomePage: Identity,
};

LoginPage.propTypes = {
  jumpToHomePage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    buttonState: state.buttonState,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (e, email, password, jumpToHome_Page) => {
      dispatch(submitHandler(e, email, password, jumpToHome_Page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
