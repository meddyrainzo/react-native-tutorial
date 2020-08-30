import {CHANGE_NAME, ChangeNameAction} from './userTypes';

export const changeName = (name: string): ChangeNameAction => ({
  type: CHANGE_NAME,
  name,
});
