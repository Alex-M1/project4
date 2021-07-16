// import Sockjs from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { url } from '../constants/urls';
import { cookieMaster } from './cookieMaster';

let isInstance = null;
export default class SockJS {
  socket = null

  stompClient = null

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
    console.log(cookieMaster.getCookie('token'));
    this.stompClient.connect({ Authorization: `Bearer ${cookieMaster.getCookie('token')}` }, () => {
    });
  }
}
