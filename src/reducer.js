const initialState = {
  userName: 'no userName',
  password: 'password'
};

function reducerInputForm(state = initialState, action) {
  if (action.type === "NEW_NAME") {
    return Object.assign(
      {}, 
      state, 
      {
        userName: action.userName,
        password: action.password
      })
  } else {
    return state;
  }
}

export default reducerInputForm;