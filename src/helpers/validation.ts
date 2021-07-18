import { MESSAGES, REG_EXP } from 'constants/constants';

export const isInvalid = ({ login, password, confirm }: IIsInvalid) => {
  if (!REG_EXP.login.test(login)) {
    return MESSAGES.invalid_login;
  }
  if (!REG_EXP.password.test(password)) {
    return MESSAGES.invalid_password;
  }
  if (confirm && password !== confirm) {
    return MESSAGES.invalid_confirm;
  }
  return false;
};

interface IIsInvalid {
  login: string;
  password: string;
  confirm?: string
}
