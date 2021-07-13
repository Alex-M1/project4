export interface IRegBtn {
  isRedirect: boolean;
  signUpRequest: () => void;
  setIsRedirect: (isReg: boolean) => void;
}
