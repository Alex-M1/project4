import { MESSAGES, REG_EXP } from 'constants/constants';

export const validate = ({ login, password, confirm }: IValidate) => {
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

interface IValidate {
  login: string;
  password: string;
  confirm?: string
}
