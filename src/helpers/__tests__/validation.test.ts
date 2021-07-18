import { MESSAGES } from 'constants/constants';
import { isInvalid } from 'helpers/validation';

describe('isInvalid', () => {
  let params;
  beforeEach(() => {
    params = {
      login: 'qwerty',
      password: 'neqwerty',
      confirm: 'neqwerty',
    };
  });
  it('should be valid data', () => {
    expect(isInvalid(params)).toBe(false);
  });
  it('should be invalid login', () => {
    params.login = 'і';
    expect(isInvalid(params)).toBe(MESSAGES.invalid_login);
  });
  it('should be invalid password', () => {
    params.password = 'і';
    expect(isInvalid(params)).toBe(MESSAGES.invalid_password);
  });
  it('should be invalid confirm', () => {
    params.confirm = 'і';
    expect(isInvalid(params)).toBe(MESSAGES.invalid_confirm);
  });
});
