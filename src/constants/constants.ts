export const MESSAGES = {
  invalid_login: 'invalid_login',
  invalid_password: 'invalid_password',
  invalid_confirm: 'invalid_confirm',
};

export const REG_EXP = {
  login: /^[A-Za-z0-9]{1,25}/,
  password: /^[A-Za-z0-9]{6,25}$/,
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
  FIELD_SIZE: 480,
};
export const COOKIE_AGE = 20000;

export const GAME_TYPE = {
  TIC_TAC_TOE: 'Tic-tac-toe',
  CHECKERS: 'Checkers',
};

export const TIC_TAC_ITEM = {
  X: 'X',
  O: 'O',
};

export const CHESS_DESK = {
  COLS: [1, 2, 3, 4, 5, 6, 7, 8],
  ROWS: [1, 2, 3, 4, 5, 6, 7, 8],
  CELLS_NUM_INIT: 0,
};

export const LANGUAGE = {
  LANG: 'lang',
  EN: 'en',
  RU: 'ru',
};

export const VIEW_OPTIONS = {
  HEADER_HEIGHT: 90,
  DRAGGIN_OPACITY: {
    IS_DRAGGING: 0.3,
    NOT_DRAGGING: 1,
  },
  CHECKER_FIELD: 500,
  CELL_BACKGROUND: {
    GRAY: '#ccc',
    WHITE: '#fff',
    POSSIBLE: '#b2ff65',
  },
};

export const LOCAL_STORAGE = {
  login: 'login',
  token: 'token',
  gameOptions: 'gameOptions',
};

export const GAME_SETTINGS = {
  bot: 'Bot',
  user: 'User',
};

export const CHECKER_FIELD_INIT = [
  null,
  {
    checker: { blackChecker: false, queen: false },
    index: 1,
    blackSquare: true,
  },
  {
    checker: null,
    index: 2,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 3,
    blackSquare: true,
  },
  {
    checker: null, index: 4, blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 5,
    blackSquare: true,
  },
  {
    checker: null,
    index: 6,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 7,
    blackSquare: true,
  },
  { checker: null, index: 8, blackSquare: false },
  { checker: null, index: 9, blackSquare: false },
  {
    checker: { blackChecker: false, queen: false },
    index: 10,
    blackSquare: true,
  },
  {
    checker: null,
    index: 11,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 12,
    blackSquare: true,
  },
  {
    checker: null,
    index: 13,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 14,
    blackSquare: true,
  },
  {
    checker: null,
    index: 15,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 16,
    blackSquare: true,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 17,
    blackSquare: true,
  },
  {
    checker: null,
    index: 18,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 19,
    blackSquare: true,
  }, {
    checker: null,
    index: 20,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 21,
    blackSquare: true,
  },
  {
    checker: null,
    index: 22,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: false,
      queen: false,
    },
    index: 23,
    blackSquare: true,
  },
  {
    checker: null,
    index: 24,
    blackSquare: false,
  },
  {
    checker: null,
    index: 25,
    blackSquare: false,
  },
  {
    checker: null,
    index: 26,
    blackSquare: true,
  },
  {
    checker: null,
    index: 27,
    blackSquare: false,
  },
  {
    checker: null,
    index: 28,
    blackSquare: true,
  },
  {
    checker: null,
    index: 29,
    blackSquare: false,
  },
  {
    checker: null,
    index: 30,
    blackSquare: true,
  },
  {
    checker: null,
    index: 31,
    blackSquare: false,
  },
  {
    checker: null,
    index: 32,
    blackSquare: true,
  },
  {
    checker: null,
    index: 33,
    blackSquare: true,
  },
  {
    checker: null,
    index: 34,
    blackSquare: false,
  },
  {
    checker: null,
    index: 35,
    blackSquare: true,
  },
  {
    checker: null,
    index: 36,
    blackSquare: false,
  },
  {
    checker: null,
    index: 37,
    blackSquare: true,
  },
  {
    checker: null,
    index: 38,
    blackSquare: false,
  },
  {
    checker: null,
    index: 39,
    blackSquare: true,
  },
  {
    checker: null,
    index: 40,
    blackSquare: false,
  },
  {
    checker: null,
    index: 41,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 42,
    blackSquare: true,
  },
  {
    checker: null,
    index: 43,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 44,
    blackSquare: true,
  },
  {
    checker: null,
    index: 45,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 46,
    blackSquare: true,
  },
  {
    checker: null,
    index: 47,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 48,
    blackSquare: true,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 49,
    blackSquare: true,
  },
  {
    checker: null,
    index: 50,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 51,
    blackSquare: true,
  },
  {
    checker: null,
    index: 52,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 53,
    blackSquare: true,
  },
  {
    checker: null,
    index: 54,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 55,
    blackSquare: true,
  },
  {
    checker: null,
    index: 56,
    blackSquare: false,
  },
  {
    checker: null,
    index: 57,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 58,
    blackSquare: true,
  },
  {
    checker: null,
    index: 59,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 60,
    blackSquare: true,
  },
  {
    checker: null,
    index: 61,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 62,
    blackSquare: true,
  },
  {
    checker: null,
    index: 63,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 64,
    blackSquare: true,
  },
];
