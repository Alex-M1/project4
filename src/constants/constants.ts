export const MESSAGES = {
  invalid_login: 'invalid_login',
  invalid_password: 'invalid_password',
  invalid_confirm: 'invalid_confirm',
};

export const REG_EXP = {
  login: /^[a-z0-9]{1,25}/,
  password: /^[a-z0-9]{6,25}$/,
};

export const COOKIE_SETTING = {
  AGE: 20000,
  SPLIT_LEN: 2,
};

export const TIC_TAC = {
  WINNER_LINES: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};
export const COOKIE_AGE = 20000;

export enum GAME_TYPE {
  TIC_TAC_TOE = 'Tic-tac-toe',
  CHECKERS = 'Checkers'
}
