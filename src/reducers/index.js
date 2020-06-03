const initialState = {
  buttonState: true,
  clearSelectionState: true,
  email: "",
  errorMessage: "",
  listItemNo: null,
  listNo: null,
  password: "",
};

const rootReducer = (state = initialState, action) => {
  let tempState = state;
  const { type, payload } = action;
  switch (type) {
    case "SHOWLIST":
      return {
        ...state,
        clearSelectionState: payload.value,
        listNo: payload.index,
        listItemNo: null,
      };
    case "SHOWDESC":
      return { ...state, listItemNo: payload };

    case "CHANGEHANDLER":
      tempState[payload.key] = payload.value;
      return {
        ...tempState,
        buttonState: payload.buttonState,
        errorMessage: payload.errorMessage,
      };
    case "SUBMITHANDLER":
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};

export default rootReducer;
