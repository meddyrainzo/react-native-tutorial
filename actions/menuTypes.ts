export const CLOSE_MENU = 'CLOSE_MENU';

export const OPEN_MENU = 'OPEN_MENU';

type CloseMenuAction = {
  type: typeof CLOSE_MENU;
};

type OpenMenuAction = {
  type: typeof OPEN_MENU;
};

export type ToggleMenuAction = CloseMenuAction | OpenMenuAction;
