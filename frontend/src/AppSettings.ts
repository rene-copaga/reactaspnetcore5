export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021test-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021staging-backend.azurewebsites.net'
    : 'https://localhost:5001';
export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: '',
  client_id: '',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
