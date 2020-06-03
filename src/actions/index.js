// for enabling and disabling clear selection button and containing list index for showing it
export const showList = (index, clearSelectionState) => {
  let value;
  if (index === null) {
    value = true;
  } else if (index != null && clearSelectionState) {
    value = false;
  }
  return {
    type: "SHOWLIST",
    payload: { index: index, value: value },
  };
};

// for containing list item index on onClick
export const showDesc = (index) => {
  return {
    type: "SHOWDESC",
    payload: index,
  };
};

// for updating state of email and password
export const changeHandler = (
  e,
  email,
  password,
  errorMessage,
  buttonState
) => {
  let key = e.target.name;
  let value = e.target.value;
  if (errorMessage !== "") {
    errorMessage = "";
  }
  key === "email" ? (email = value) : (password = value);
  let btnState = buttonState;
  if (email !== "" && password !== "" && buttonState) {
    btnState = false;
  } else if ((email === "" || password === "") && !buttonState) {
    btnState = true;
  }
  return {
    type: "CHANGEHANDLER",
    payload: {
      key: key,
      value: value,
      buttonState: btnState,
      errorMessage: errorMessage,
    },
  };
};

// for checking credentials and jump to home page
export const submitHandler = (e, email, password) => {
  return {
    type: "SUBMITHANDLER",
    payload: "Email or Password does not match",
  };
};
