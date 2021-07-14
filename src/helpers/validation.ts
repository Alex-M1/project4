import { messages, regExp } from 'constants/constants';

export const isInvalid = ({ login, password, confirm }: IIsInvalid) => {
  if (!regExp.login.test(login)) {
    return messages.invalidLogin;
  }
  if (!regExp.password.test(password)) {
    return messages.invalidPassword;
  }
  if (confirm && password !== confirm) {
    return messages.invalidConfirm;
  }
  return false;
};

interface IIsInvalid {
  login: string;
  password: string;
  confirm?: string
}
