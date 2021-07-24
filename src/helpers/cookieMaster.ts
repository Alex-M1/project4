import { COOKIE_SETTING } from '../constants/constants';

export const cookieMaster = {
  setTokenInCookie: (payload: string, age: number = COOKIE_SETTING.AGE) => {
    document.cookie = `token=${payload}; path=/; max-age=${age}`;
  },
  getCookie: (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === COOKIE_SETTING.SPLIT_LEN) {
      return parts.pop().split(';').shift();
    }
  },

  deleteCookie: (name: string) => {
    cookieMaster.setTokenInCookie(name, -1);
  },
};
