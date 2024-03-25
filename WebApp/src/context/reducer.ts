import {ActionTypes, UserState, UserAction} from './actions/types';

const initialState: UserState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
