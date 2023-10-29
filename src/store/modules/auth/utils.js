import jwtDecode from 'jwt-decode';

const key = 'access_token';
const ls = localStorage;

export const getSessionToken = () => ls.getItem(key) || null;
export const removeSessionToken = () => ls.removeItem(key);
export const getSessionData = () => {
  const token = getSessionToken();
  if (!token) return null;
  let data = null;
  try {
    data = jwtDecode(token.toString());
  } catch (e) {
    window.console.error('Invalid session token');
  }
  return data;
};

export const checkExpiresSessionToken = () => {
  const data = getSessionData();
  console.log('data', data);
  if ((data || {}).expired && new Date() > new Date((data || {}).expired)) {
    removeSessionToken();
  }
};

export const getTokenData = (token = null) => {
  if (!token) throw new Error('token is required');
  let data = null;
  try {
    data = jwtDecode(token.toString());
  } catch (e) {
    window.console.error('Invalid token');
  }
  return data;
};

export const setSessionToken = (token = null) => {
  if (!token) throw new Error('token is required');
  const storage = ls;
  storage.setItem('access_token', token);

  return true;
};

export default {
  getSessionToken,
  checkExpiresSessionToken,
  getSessionData,
  removeSessionToken,
  getTokenData,
};
