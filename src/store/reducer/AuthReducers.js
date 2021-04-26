export const InitialState = {};

export const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'Log_In':
      console.log(action.type, 'reducer');
      return 'Log_In';

    default:
      return state;
  }
};

export default AuthReducer;
