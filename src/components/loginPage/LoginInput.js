import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { changeHandler } from "../../actions/index";

import "../../App.css";

class Input extends React.Component {
  render() {
    const {
      buttonState,
      changeHandler,
      className,
      email,
      errorMessage,
      name,
      password,
      placeholder,
      type,
    } = this.props;
    return (
      <>
        <input
          className={className}
          name={name}
          onChange={(e) =>
            changeHandler(e, email, password, errorMessage, buttonState)
          }
          placeholder={placeholder}
          type={type}
        />
      </>
    );
  }
}

Input.defaultProps = {
  name: "input",
  onChange: Identity,
  placeholder: "Input",
  type: "text",
};

Input.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    email: state.email,
    password: state.password,
    buttonState: state.buttonState,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (e, email, password, errorMessage, buttonState) => {
      dispatch(changeHandler(e, email, password, errorMessage, buttonState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
