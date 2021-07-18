// Это заглушка, потом перепешу в сагу
import { Stomp, CompatClient } from '@stomp/stompjs';
import { url } from '../constants/urls';
import { cookieMaster } from './cookieMaster';

let isInstance = null;
export default class SockJS {
  socket: WebSocket = null

  stompClient: CompatClient = null

  constructor() {
    if (isInstance) return isInstance;
    this.socket = null;
    this.stompClient = null;
    isInstance = this;
    return this;
  }

  connect = () => {
    this.socket = new WebSocket(`${url.socket}/game-menu`);
    this.stompClient = Stomp.over(this.socket);
    const body = { creatorLogin: 'qwerty', gameType: 'Checkers', id: null };
    this.stompClient.connect({ Authorization: `Bearer ${cookieMaster.getCookie('token')}` }, () => {
      4;

      this.stompClient.subscribe('/topic/rooms', (message) => console.log(JSON.parse(message.body)));
      this.stompClient.subscribe('/radioactive/updateRoom', (message) => console.log(JSON.parse(message.body)));
      this.stompClient.send('/topic/rooms', {}, JSON.stringify(body));
      this.stompClient.send('/radioactive/updateRoom', {}, JSON.stringify({}));
    });
  }
}
