export const server = 'https://localhost:5001';
export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: '',
  client_id: '',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
