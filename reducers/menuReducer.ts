import {ToggleMenuAction, OPEN_MENU, CLOSE_MENU} from '../actions/menuTypes';

export type MenuActionState = {
  action: string;
};

const initialState: MenuActionState = {
  action: 'closeMenu',
};

export const menuReducer = (
  state = initialState,
  action: ToggleMenuAction,
): MenuActionState => {
  switch (action.type) {
    case CLOSE_MENU:
      return {action: 'closeMenu'};
    case OPEN_MENU:
      return {action: 'openMenu'};
    default:
      return state;
  }
};
