const role = 'auth';

export const AUTH_SERVICE = 'AUTH_SERVICE';

export const AuthPattern = {
  isAuthenticated: { role, cmd: 'isAuthenticated' },
  hashPass: { role, cmd: 'hash' }
}
