export interface IAuthIndex {
  type: string;
  page?: string;
}

export interface IAuthIpt extends IAuthIndex {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
