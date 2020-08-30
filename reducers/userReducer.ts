import {ChangeNameAction, CHANGE_NAME} from '../actions/userTypes';

type UserState = {
  name: string;
};

const initialState: UserState = {
  name: 'Meddy Rainzo',
};

export default (
  state: UserState = initialState,
  action: ChangeNameAction,
): UserState => {
  switch (action.type) {
    case CHANGE_NAME:
      return {name: action.name};
    default:
      return state;
  }
};
