export interface IRoom {
  id: number;
  loginName: string;
  gameType: string;
}

export interface ICredential {
  rooms: IRoom[];
}
