import { messages, regExp } from 'constants/constants';

export const validate = ({ login, password, confirm }: IValidate) => {
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

interface IValidate {
  login: string;
  password: string;
  confirm?: string
}
