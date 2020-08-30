import {ToggleMenuAction, CLOSE_MENU, OPEN_MENU} from './menuTypes';

export const closeMenu = (): ToggleMenuAction => ({
  type: CLOSE_MENU,
});

export const openMenu = (): ToggleMenuAction => ({
  type: OPEN_MENU,
});
