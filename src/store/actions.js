import API from '@/utils/API';
import {
  setSessionToken,
  checkExpiresSessionToken,
  getSessionData,
  getSessionToken,
  removeSessionToken,
} from './modules/auth/utils';

export default {
  async authorization({ state, commit }) {
    console.log('state', state);
    const { login, password } = state.modalLogin;
    try {
      const res = await API.post('/auth', { login, password });
      // eslint-disable-next-line no-console
      const data = JSON.parse(res.data);
      setSessionToken(data.token);
      commit('auth/SET_AUTH', {
        user: data.login,
        token: data.token,
      });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  checkToken({ commit }) {
    const check = checkExpiresSessionToken();
    console.log('check', check);
    if (check) {
      const token = getSessionToken();
      const { sub } = getSessionData();
      commit('auth/SET_AUTH', { user: sub, token });
    }
  },

  logout({ commit }) {
    removeSessionToken();
    commit('auth/SET_AUTH', { user: null, token: null });
  },
};
