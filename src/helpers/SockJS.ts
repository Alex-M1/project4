import Sockjs from 'sockjs-client';
import { url } from '../constants/urls';
import { cookieMaster } from './cookieMaster';

let isInstance = null;
export default class SockJS {
  socket = null

  constructor() {
    if (isInstance) return isInstance;
    this.socket = null;
    isInstance = this;
    return this;
  }

  connect = () => {
    this.socket = new Sockjs(`${url.server}/game-menu`, null, {
      transports: ['xhr-streaming'],
      headers: { Authorization: `Beawer ${cookieMaster.getCookie('token')}` },
    });
    // fetch(`${url.server}/game-menu`, {
    //   headers: {
    //     Authorization: `Bearer ${cookieMaster.getCookie('token')}`,
    //   },
    // }).then((res) => res.text())
    //   .then((data) => console.log(data));
  }
}
