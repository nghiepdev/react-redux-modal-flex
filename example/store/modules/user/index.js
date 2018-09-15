import * as actions from './actions';

const initState = {
  username: 'username',
  password: 'mypassword',
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return state;

    default:
      return state;
  }
};
