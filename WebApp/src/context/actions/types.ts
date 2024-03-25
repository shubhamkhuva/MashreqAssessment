export interface User {
  fullName: string;
  username: string;
}

export interface UserState {
  currentUser: User | null;
}

export enum ActionTypes {
  SET_USER = 'SET_USER',
}

export interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: User;
}

export type UserAction = SetUserAction;
