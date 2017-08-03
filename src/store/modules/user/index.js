import * as actions from './actions';

const initState = {
  username: 'test',
  password: 'my password',
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return state;

    default:
      return state;
  }
};
