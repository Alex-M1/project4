export interface IAuthBtn {
    isRedirect: boolean;
    setIsRedirect: (isRedirect: boolean) => void;
    signInRequest: () => void;
}
