import { TSetCredentialsValue, ISetting } from './types';
import * as AT from './actionTypes';

export const setCredentialsValue = (setting: ISetting, payload: string): TSetCredentialsValue => ({
  type: AT.SET_CREDENTIALS_VALUE, setting, payload,
});
