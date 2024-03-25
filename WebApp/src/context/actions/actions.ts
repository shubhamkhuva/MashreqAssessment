import {ActionTypes, User} from './types';

export const setLoggedInUser = (user: User): any => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
