export interface ICell {
  id: number,
  hasItem: boolean,
  color: string
}

export interface IMatch {
  params: {
    id: string
  }
}

export interface IGameData {
  roomId: string,
  gameType: string,
  playWith: string,
}
