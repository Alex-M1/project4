import { cookieAge } from '../constants/constants';

export const cookieMaster = {
  setTokenInCookie: (payload: string, age: number = cookieAge) => {
    document.cookie = `token=${payload}; path=/; max-age=${age}`;
  },
  getCookie: (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },

  deleteCookie: (name: string) => {
    cookieMaster.setTokenInCookie(name, -1);
  },
};