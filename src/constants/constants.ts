export const MESSAGES = {
  invalid_login: 'invalid_login',
  invalid_password: 'invalid_password',
  invalid_confirm: 'invalid_confirm',
};

export const REG_EXP = {
  login: /^[a-z0-9]{1,25}/,
  password: /^[a-z0-9]{6,25}$/,
};

export const COOKIE_AGE = 20000;
